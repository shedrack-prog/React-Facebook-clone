import React from "react";
import { storiesData } from "../data";
import "./StoryCard.css";

const StoryCard = ({ item }) => {
  return (
    <div
      className="overflow-x-scroll scroll h-[13rem] md:h-[17rem] px-1 flex
       gap-2 w-full relative  story__card scroll-smooth scroll shadow-md"
      id="story-card"
    >
      {storiesData.map((item) => (
        <div
          key={item.id}
          className="items-center group p-2
           min-w-[95px] h-[170px] md:min-w-[120px] md:h-[195px]
        cursor-pointer relative rounded-lg scroll-smooth scroll"
        >
          <img
            src={item.storyUrl}
            alt=""
            className=" object-cover absolute h-full w-full 
           transition-all duration-500 group-hover:scale-105 rounded-lg"
          />
          <div
            className=" flex justify-between  
                flex-col absolute h-full p-2"
          >
            <img
              src={item.profileUrl}
              alt=""
              className=" w-[40px] h-[40px] rounded-full border-4
               border-blue-700 object-cover"
            />
            <p className="text-white text-sm">{item.user}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryCard;
