import React from "react";
import Message from "@/public/message1.svg";
import Image from "next/image";
import Dot from "@/public/Graphic_Elements.svg";
import CircularPattern from "@/public/circularPattern.svg";

const Subscribe = () => {
  return (
    <div className="container mx-auto sm:px-8 md:px-16 lg:px-32 xl:px-40 sm:py-8 relative ">
      <Image
        src={Dot}
        alt="graphic element"
        className=" absolute -top-5 left-32 sm:w-28 sm:top-0 sm:left-0 "
      />
      <Image
        src={CircularPattern}
        alt="graphic element"
        className=" absolute sm:w-16 sm:-bottom-2 -bottom-6 -right-8"
      />
      <div
        style={{ backgroundColor: "rgba(250, 205, 73, 0.08)" }}
        className="flex flex-col sm:py-8 sm:px-8 sm:gap-4 md:gap-6 md:py-16 lg:py-24 md:px-12 justify-around lg:gap-8 items-center text-center"
      >
        <div className="flex flex-col sm:gap-4 md:gap-6 lg:gap-8 justify-around">
          <h2 className="sm:text-lg md:text-xl lg:text-2xl color-pink font-bold tracking-widest uppercase">
            subscribe to our newsletter
          </h2>
          <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            Prepare yourself & let’s explore the beauty of the world
          </p>
        </div>
        <form
          action=""
          className="flex justify-center relative items-center gap-8 w-4/5"
        >
          <label htmlFor="Email" className="absolute left-4 z-10">
            <Image src={Message} alt="Message Icon" />
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Your Email!"
            style={{ padding: "8px 4rem" }}
            className="px-10 customButton border-none outline-none drop-shadow-2xl w-full"
          />
          <input type="submit" className="customButton bg-blue color-gray" />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
