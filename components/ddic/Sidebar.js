import { HomeIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import Sidebarlink from "./Sidebarlink";

const Sidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center
     xl:items-start xl:w-[340px] p-2 fixed h-full bg-black "
    >
      <div className=" hoverAnimation flex items-center justify-center w-14 h-14 p-0 xl:ml-24 ">
        <Image src="/zlogo (6).png" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <Sidebarlink text="Home" Icon={HomeIcon} active />
        <Sidebarlink text="Home" Icon={HomeIcon} />
        <Sidebarlink text="Home" Icon={HomeIcon} />
        <Sidebarlink text="Home" Icon={HomeIcon} />
      </div>

      <button
        className="hidden rounded-full w-56 h-[52px]
       xl:inline ml-auto bg-[#1d9bf0] text-white text-lg
        font-bold shadow-md hover:bg-[#1a8cd8]"
      >
        text
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center
       hoverAnimation xl:ml-auto xl:-mr-5 mt-auto"
      >
        <img
          src="/logo2.png"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold ">LOREM 32</h4>{" "}
          <p className="text-[#6e767d]">lorem45</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
