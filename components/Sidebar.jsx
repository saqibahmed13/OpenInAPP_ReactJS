"use client";

import React from "react";
import {
  Cog6ToothIcon,
  BellIcon,
  Squares2X2Icon,
  ArrowUpOnSquareIcon,
  ReceiptPercentIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const iconClass = `w-6 text-gray-600`;
const itemClass = ` flex flex-row-reverse justify-center gap-2 p-3 py-2 pr-16`;

const Sidebar = ({isOpen, isMobile}) => {
  return (
    <div className="w-full flex flex-col items-start gap-y-8 py-6  bg-white text-black h-full">
      {
        isOpen && isMobile ? "" :
      <div className="flex justify-center w-full font-semibold text-xl">Base</div>
      }
      <div className={itemClass}>
        Dashboard <Squares2X2Icon className={iconClass} />
      </div>
      <div className={`${itemClass} 
      bg-gradient-to-r from-blue-200 from-10% via-white via-30% to-white to-90% w-full -mx-4 text-blue-600  ` } >
        Upload <ArrowUpOnSquareIcon className={`w-6 text-blue-600` } />
      </div>
      <div className={itemClass}>
        Invoice <ReceiptPercentIcon className={iconClass} />
      </div>
      <div className={itemClass}>
        Schedule <DocumentTextIcon className={iconClass} />
      </div>
      <div className={itemClass}>
        Calendar <CalendarDaysIcon className={iconClass} />
      </div>
      <div className={itemClass}>
        Notification <BellIcon className={iconClass} />
      </div>
      <div className={itemClass}>
        Settings <Cog6ToothIcon className={iconClass} />
      </div>
    </div>
  );
};

export default Sidebar;
