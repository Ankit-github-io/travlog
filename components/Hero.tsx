import Image from "next/image";
import React from "react";
import WorkIcon from "@/public/Work.svg";
import Earth from "@/public/Earth.svg";
import PlayCircle from "@/public/PlayCircleIcon.svg";
import LocationIcon from "@/public/locationIcon.svg";
import SendIcon from "@/public/SendIcon.svg";
import Add from "@/public/AddUserIcon.svg";
import { Gallery } from ".";
import Img1 from "@/public/images/img1.jpg";
import Img2 from "@/public/images/img2.jpg";
import Img3 from "@/public/images/img3.jpg";

const Hero = () => {
  return (
    <div className=" sm:py-8 sm:px-10 flex container mx-auto md:px-16 lg:px-24 xl:py-8 xl:px-32 ">
      <div className="sm:basis-2/5 sm:gap-4 md:gap-6 flex flex-col lg:gap-10 xl:gap-12 my-7 items-start">
        <button className="customButton color-pink bg-white drop-shadow-2xl">
          <Image
            style={{ color: "inherit" }}
            src={WorkIcon}
            alt="Explore the world"
          />
          <span>Explore The Word!</span>
        </button>
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black">
          Travel
          <span className="color-pink "> top destination </span> of the world
        </h1>
        <p>
          We always make our customer happy by providing as many choice as
          possible
        </p>
        <div className="flex items-center gap-4">
          <button className="customButton color-gray bg-blue drop-shadow-2xl">
            Get Started
          </button>
          <button className="customButton border-1px-gray bg-white">
            <Image src={PlayCircle} alt="play circle icon" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="relative sm:basis-3/5 ">
        <div className="absolute" style={{ zIndex: "-1" }}>
          <Image src={Earth} alt="Background Object" />
        </div>
        <button className=" absolute bg-pink left-8 top-52 rounded-full w-16 h-16 inline-flex items-center drop-shadow-2xl justify-center">
          <Image src={SendIcon} alt="Background Object" />
        </button>
        <button className=" absolute bottom-6 right-40 rounded-full bg-orange-500 w-16 h-16 inline-flex items-center drop-shadow-2xl justify-center">
          <Image src={Add} alt="Background Object" />
        </button>
        <button className="customButton bg-white absolute right-0 top-80 drop-shadow-2xl md:top-48 md:-right-4">
          <Image src={LocationIcon} alt="location Icon" />
          <span>Top Place</span>
        </button>

        <div className="sm:gap-4 flex items-center justify-around m-6 p-6">
          <div className="sm:basis-6/12 flex flex-col gap-4 ">
            <div className="rounded-3xl ">
              <Gallery key={2} src={Img1} imageStyle="aspect-square" />
            </div>
            <div className="rounded-3xl">
              <Gallery key={3} src={Img2} imageStyle="aspect-square" />
            </div>
          </div>
          <div className="sm:basis-6/12 rounded-3xl ">
            <Gallery key={1} src={Img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
