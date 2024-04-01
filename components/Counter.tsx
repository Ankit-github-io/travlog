import React from "react";

const Counter = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className=" sm:gap-2 sm:p-4 md:gap-3 md:p-6 lg:gap-4 lg:p-8 rounded-3xl flex flex-col border-1px-gray text-center">
      <span className="text-orange-600 sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
        {value}
      </span>
      <p className="text-sm text-black font-normal">{title}</p>
    </div>
  );
};

export default Counter;
