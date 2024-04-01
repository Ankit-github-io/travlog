"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import BookingImage from "@/public/images/booking1.png";
import DestinationImage from "@/public/images/destination1.png";

import "swiper/css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      autoplay: true,
      loop: true,
      speed: 100,
      slidesPerView: 2,
    });
  }, []);

  return (
    <div className="swiper ">
      {/* <!-- Additional required wrapper --> */}
      <div className="swiper-wrapper py-4">
        {/* <!-- Slides --> */}
        <div className="swiper-slide px-5 py-12">
          <div className="flex flex-col justify-around items-center text-center sm:gap-2 md:gap-3 xl:gap-4 sm:p-4 md:p-6 lg:p-8 xl:p-12 rounded-2xl bg-white w-80 h-96 drop-shadow-2xl ">
            <Image src={DestinationImage} alt="slider image" />
            <h4 className="sm:text-xl lg:text-2xl">Best Tour Guide</h4>
            <p className="text-gray-900 text-xs md:text-base">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
        <div className="swiper-slide px-5 py-12">
          <div className="flex flex-col justify-around items-center text-center sm:gap-2 md:gap-3 xl:gap-4 sm:p-4 md:p-6 lg:p-8 xl:p-12 rounded-2xl bg-white w-80 h-96 drop-shadow-2xl ">
            <Image src={BookingImage} alt="slider image" />
            <h4 className="sm:text-xl lg:text-2xl">Best Tour Guide</h4>
            <p className="text-gray-900 text-xs md:text-base">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
        <div className="swiper-slide px-5 py-12">
          <div className="flex flex-col justify-around items-center text-center sm:gap-2 md:gap-3 xl:gap-4 sm:p-4 md:p-6 lg:p-8 xl:p-12 rounded-2xl bg-white w-80 h-96 drop-shadow-2xl ">
            <Image src={DestinationImage} alt="slider image" />
            <h4 className="sm:text-xl lg:text-2xl">Best Tour Guide</h4>
            <p className="text-gray-900 text-xs md:text-base">
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
        ...
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>

      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* <!-- If we need scrollbar --> */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default SwiperComponent;
