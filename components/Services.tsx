import React from "react";
import { SwiperComponent } from ".";

const Services = () => {
  return (
    <div className="sm:pl-8 md:pl-16 lg:p-24 xl:p-32 flex justify-between items-center container mx-auto py-8 pl-40 relative">
      <div className="flex basis-2/4 flex-col gap-2 md:gap-4 justify-around sm:py-2 md:py-3 lg:py-4">
        <h2 className="sm:text-lg md:text-xl lg:text-2xl color-pink font-bold tracking-widest">
          SERVICE
        </h2>
        <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          Our top value categories for you
        </p>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default Services;
