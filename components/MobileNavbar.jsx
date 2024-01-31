// MobileNavbar.js

import logoWhite from "@/public/icons/baseWhite.svg";
import logoBlue from "@/public/icons/baseBlue.svg";
import {BellIcon }from "@heroicons/react/24/outline";
import avatarImage from "@/public/img/profile.jpg";
import Image from "next/image";

const MobileNavbar = ({ handleOnClick, isOpen, setIsOpen }) => {
  return (
    <div
      className={`md:hidden fixed 
        bg-gray-100
        top-0 left-0 w-full p-4 flex justify-between items-center`}
    >
      {isOpen ? (
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Image src={logoBlue} alt="Logo" className="h-6 w-6 mr-2" />
            <span className="text-xl font-semibold">Base</span>
          </div>
          <div onClick={handleOnClick}>✕</div>
        </div>
      ) : (
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div onClick={handleOnClick} className="mr-4">
              ☰
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-black">
              <BellIcon className="w-7" />
            </div>
            <div>
              <Image src={avatarImage} alt="Avatar" className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
