import Image from "next/image";
import React from "react";
import BookingCom from "@/public/brand/BookingCom.svg";
import Expedia from "@/public/brand/Expedia.svg";
import Airbnb from "@/public/brand/airbnb.svg";
import Rbitz from "@/public/brand/rbitz.svg";
import TripAdviser from "@/public/brand/tripAdviser.svg";
import ArrowPattern from "@/public/ArrowPattern.svg";

const Brand = () => {
  const brands = [Rbitz, Airbnb, Expedia, TripAdviser, BookingCom];
  return (
    <div className="sm:py-8 sm:pl-14 sm:gap-3 sm:justify-evenly sm:pr-8 md:pl-16 lg:pl-24 xl:py-8 xl:pl-32 flex justify-between flex-wrap items-center container mx-auto  relative">
      {brands.map((value, index) => (
        <Image alt={`brand ${index}`} src={value} key={index} />
      ))}
      <div className="absolute left-0 bottom-0 sm:w-10 md:w-12">
        <Image src={ArrowPattern} alt="arrow for bg" />
      </div>
    </div>
  );
};

export default Brand;
