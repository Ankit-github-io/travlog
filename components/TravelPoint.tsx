import React from "react";
import Counter from "./Counter";
import Girl from "@/public/images/Girl.png";
import Discount from "@/public/discount1.svg";
import Image from "next/image";
import TicketStar from "@/public/ticket-star.svg";

const TravelPoint = () => {
  const counterData = [
    { title: "Holiday Package", value: "500+" },
    { title: "Luxury Hotel", value: "100" },
    { title: "Premium Airlines", value: "7" },
    { title: "Happy Customer", value: "2k+" },
  ];
  return (
    <div className="sm:pr-8 sm:py-8 sm:gap-4 md:pr-16 md:gap-6 lg:pr-24 lg:gap-8 xl:py-8 xl:pr-32 flex justify-between items-center container mr-auto  relative">
      <button className="bg-yellow p-2 sm:p-2 absolute rounded-full md:p-3 lg:p-4 drop-shadow-2xl right-0 top-2/4">
        <Image src={TicketStar} alt="ticket star" />
      </button>
      <div className="relative sm:basis-7/12">
        <Image src={Girl} alt="Girl Image" />
        <button className="customButton bg-white drop-shadow-2xl absolute sm:-right-2 sm:top-10 right-10 top-32">
          <Image src={Discount} alt="discount icon" />
          <span>DisCount Price</span>
        </button>
        <span className="circleBg rounded-full w-7 h-7 bg-orange-600 bottom-40 right-28 "></span>
        <span className="blur-sm circleBg rounded-full w-5 h-5 bg-orange-600 top-64 right-40  "></span>
        <span className="blur-sm circleBg rounded-full w-11 h-11 bg-yellow right-0 top-52 md:top-28 md:-right-4"></span>
        <span className="blur-sm circleBg rounded-full sm:w-14 sm:h-14 sm:-top-5 w-28 h-28 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 top-0 right-8"></span>
        <span className="blur-sm circleBg rounded-full sm:w-8 sm:h-8 sm:top-5 w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500  top-28 left-8"></span>
        <div className="absolute left-0 bottom-0 -z-10 bg-yellow rounded-e-full w-full h-4/5"></div>
      </div>
      <div className="sm:basis-5/12 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex flex-col">
        <div className="flex flex-col sm:gap-2 md:gap-4 lg:gap-6 xl:gap8">
          <h2 className="sm:text-lg md:text-xl lg:text-2xl color-pink font-bold tracking-widest">
            TRAVEL POINT
          </h2>
          <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            We helping you find your dream location
          </p>
          <p className="text-gray-900 text-xs">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {counterData.map((value, index) => (
            <Counter title={value.title} value={value.value} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
