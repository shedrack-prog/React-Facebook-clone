import React from "react";

const StorySection = () => {
  return (
    <div className=" bg-white h-[3.1rem]  rounded-lg ">
      <div className=" top-0 right-0">
        <div className="w-full h-full flex items-center justify-around">
          <div className="  w-[7rem] flex flex-col text-center justify-between h-full">
            <p className="text-[#1979e7]  text-sm">Stories</p>
            <span className="w-full h-[2.4px]  bg-[#1b74e4] justify-end"></span>
          </div>
          <div className="rounded-md hover:bg-gray-200 transition-all py-3  px-6 cursor-pointer">
            <p className="text-sm">Reels</p>
          </div>
          <div className="rounded-md hover:bg-gray-200 transition-all py-3 px-6 cursor-pointer">
            <p className="text-sm">Rooms</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 flex-1"></div>
    </div>
  );
};

export default StorySection;
