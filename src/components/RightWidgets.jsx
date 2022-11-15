import React from "react";
import "./RightWidgets.css";
import photo1 from "../assets/person3.jpg";
import ship from "../assets/ship.jpg";

import { AiFillBell } from "react-icons/ai";
import CampaignIcon from "@mui/icons-material/Campaign";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { storiesData } from "../data";

const RightWidgets = () => {
  return (
    <div className="widget flex flex-col items-center pl-3  pt-7 h-full overflow-y-scroll scroll">
      <div className="flex flex-col gap-3">
        <h1 className="p-1 text-xl font-semibold text-gray-600">Sponsored</h1>
        <div className="transition-all duration-300 p-2 hover:bg-gray-200  cursor-pointer flex gap-3 w-full rounded-lg">
          <img
            src={photo1}
            alt=""
            className="w-[105px] h-[100px] rounded-lg object-cover"
          />
          <div>
            <h2 className="font-semibold ">
              Enhance your knowledge with Google IT
            </h2>
            <span>coursera.org</span>
          </div>
        </div>
        <div className="transition-all duration-300 p-2 hover:bg-gray-200 cursor-pointer  flex gap-3 w-full rounded-lg">
          <img
            src={ship}
            alt=""
            className="w-[105px] h-[100px] rounded-lg object-cover"
          />
          <div>
            <h2 className="font-semibold ">Get your job offer</h2>
            <span>talentservice.com</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 h-[2px] mt-4" />

      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between items-center w-full ">
          <h1 className="text-gray-500 font-semibold text-md mb-3">
            Your Pages and profiles
          </h1>

          <div className="flex gap-[2px] cursor-pointer">
            <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={photo1}
            alt=""
            className="w-[40px] h-[40px] rounded-full oject-cover"
          />
          <h2 className="font-semibold">Darkspotacademy</h2>
        </div>
        <div className="flex ml-0 items-center gap-3 mb-3">
          <div>
            <AiFillBell size={20} className="text-gray-500" />
          </div>{" "}
          <p className="text-gray-700">9 Notifications</p>
        </div>
        <div className="flex ml-6 items-center gap-3">
          <div>
            <CampaignIcon className="text-gray-500" />
          </div>
          <p className="text-gray-700">Create promotion</p>
        </div>
      </div>
      <div className="w-full bg-gray-300 h-[2px] mt-4" />

      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-gray-500 font-semibold text-[18px]">Contacts</h1>
          <div className="flex gap-3 items-center text-gray-700">
            <div>
              <OndemandVideoIcon />
            </div>
            <div>
              <SearchIcon />
            </div>
            <div className="flex gap-[2px] cursor-pointer">
              <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
              <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
              <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
            </div>
          </div>
        </div>
        {storiesData.map((item) => (
          <div
            key={item.id}
            className="mt-3 flex gap-3 w-full items-center ml-5"
          >
            <img
              src={item.storyUrl}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <p className="font-semibold">{item.user}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-300 h-[2px] mt-4" />
      <div className="flex flex-col items-center w-full mt-3">
        <h1 className="text-lg font-semibold text-gray-700 w-full">
          Group conversations
        </h1>
        <div className="flex gap-4 items-center w-full mt-2">
          <div
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 
             cursor-pointer trasition-all duration-300"
          >
            <AddIcon />
          </div>
          <p className="font-semibold">Create new group</p>
        </div>
      </div>
    </div>
  );
};

export default RightWidgets;
