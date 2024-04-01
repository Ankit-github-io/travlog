import Image from "next/image";
import React from "react";
import LogoIcon from "@/public/LogoIcon.svg";
import { Nav } from ".";

const Header = () => {
  return (
    <>
      <div className="container mx-auto py-2 sm:px-8 sm:py-8 sm:items-center md:px-16 lg:px-24 xl:py-8 xl:px-32 justify-between flex z-10 ">
        <div className="flex logoWrapper items-center sm:gap-1 md:gap-4 sm:basis-3/12 lg:basis-4/12">
          <Image src={LogoIcon} alt="Logo Image" />
          <h1 className="text-2xl font-black">Travlog</h1>
        </div>
        <Nav />
        <div className="sm:basis-3/12 md:basis-5/12 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
          <button className="customButton">
            <span>Log In</span>
          </button>
          <button className="customButton color-gray bg-blue">
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
