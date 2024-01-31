"use client";

import { useState, useEffect } from "react";
import CsvInput from "@/components/CsvInput";
import CustomTable from "@/components/CustomTable";
import MobileNavbar from "@/components/MobileNavbar";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";

const Page = () => {
  const [data, setData] = useState([]);
  const [eye, setEye] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Toggle mobile state based on screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleTable = () => {
    setLoading(true);
    setTimeout(() => {
      if (!eye) setEye(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pt-20 md:pt-10 px-7 bg-[#FAFAFB] text-black w-full">
      <MobileNavbar handleOnClick={handleOnClick} isOpen={isOpen} />
      {isOpen ? (
        <Sidebar isMobile={isMobile} isOpen={isOpen} />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Upload CSV</h1>
          <div className="w-full h-fit flex flex-col items-center ">
            <div className="w-full md:w-5/12 md: p-3 h-fit rounded-lg bg-white mt-24">
              <CsvInput setData={setData} />
              <div
                className={`w-full cursor-pointer bg-[#605BFF]  mt-4 rounded-md p-4 text-white text-sm flex justify-center items-center`}
                onClick={toggleTable}
              >
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <ArrowUpTrayIcon className="margin-auto top-0 w-5 mr-2" />
                    Upload
                  </>
                )}
              </div>
            </div>
            {eye && data.length > 0 ? <CustomTable data={data} /> : <></>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
