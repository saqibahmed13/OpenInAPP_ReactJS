"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import googleIcon from "@/public/icons/google.svg";
import appleIcon from "@/public/icons/apple.svg";
import githubIcon from "@/public/icons/github.svg";
import discordIcon from "@/public/icons/discord.svg";
import xIcon from "@/public/icons/x.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import logoWhite from "@/public/icons/baseWhite.svg";
import logoBlue from "@/public/icons/baseBlue.svg";
import groupIcon from "@/public/icons/group.svg";

const Home = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <main className="flex">
      {/* Sideboard for larger screens */}
      {!isMobile && (
        <div
          id="sideBoard"
          className="bg-[#605BFF] w-full h-screen -skew-x-6 ml-[-2.5rem] lg:-ml-32"
        >
          <div className="ml-32 w-3/4 h-full skew-x-6 text-white flex flex-col justify-center p-10">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-white">
                <Image src={logoWhite} width={50} />
              </span>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <h1 className="text-6xl font-semibold ml-4">BASE</h1>
            </div>
            <div className="flex justify-center mb-4">
              {/* Replace these icons with your actual icon components */}
              <span className="mx-2">
                <Image src={githubIcon} width={30} />
              </span>
              <span className="mx-2">
                <Image src={xIcon} width={30} />
              </span>
              <span className="mx-2">
                <Image src={linkedinIcon} width={30} />
              </span>
              <span className="mx-2">
                <Image src={discordIcon} width={30} />
              </span>
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex w-full h-screen justify-center items-center ${
          isMobile ? "pl-4 pr-4 gap-3" : ""
        }`}
      >
        {isMobile && (
          <div className="fixed top-0 left-0 w-full bg-[#605BFF] p-4 flex items-center">
            <Image src={logoWhite} width={40} />
            <h1 className="text-white text-2xl font-semibold ml-2">BASE</h1>
          </div>
        )}

        <div
          className={`flex-col items-center w-fit ${isMobile ? "mt-8" : ""}`}
        >
          <h1 className="text-4xl font-bold py-2 ">Sign In</h1>
          <p className="text-sm md:text-md py-2 font-medium">
            Sign in to your account
          </p>

          {/* For third-party login */}
          <div className="flex w-full justify-between">
            <div className="flex items-center text-gray-400 bg-white border border-white rounded-lg my-4 p-1 text-[0.7rem] px-6 mr-8 gap-1">
              <Image src={googleIcon} width={20} /> Sign in with Google
            </div>
            <div className="flex items-center text-gray-400 bg-white border border-white rounded-lg my-4 p-1 text-[0.7rem] px-6 gap-1">
              <Image src={appleIcon} width={10} /> Sign in with Apple
            </div>
          </div>

          {/* Form */}
          <LoginForm isMobile={isMobile} />
          

        </div>
      </div>
    </main>
  );
};

export default Home;
