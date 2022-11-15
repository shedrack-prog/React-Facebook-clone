import React from "react";

import profilePic from "../assets/person3.jpg";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MoodIcon from "@mui/icons-material/Mood";
import VerifiedIcon from "@mui/icons-material/Verified";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Poster = () => {
  const user = useSelector(selectUser);
  return (
    <div className="h-[6rem] bg-white mt-4 p-2 shadow-md rounded-lg">
      <div className="flex gap-2 justify-between ">
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center ">
          <img
            src={profilePic}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div
          className="bg-gray-200 flex-1   justify-center md:justify-start
           rounded-full md:rounded-3xl h-8 flex items-center  text-sm"
        >
          <input
            type="text"
            placeholder={`What's on your mind, ${user?.displayName}?`}
            className=" w-full outline-none bg-transparent text-black border-none p-2 text-sm"
          />
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-200 mt-2" />

      <div className="flex justify-around items-center  mt-2">
        <div className="flex gap-1 items-center justify-center cursor-pointer ">
          <VideoCallIcon className="text-[#f3425f]" />
          <p className="text-sm">Live video</p>
        </div>
        <div className="flex gap-1 items-center justify-center cursor-pointer ">
          <PermMediaIcon className="text-[#45bd62]" />
          <p className="text-sm">Photo/video</p>
        </div>
        <div className="flex gap-1 items-center justify-center cursor-pointer ">
          <MoodIcon className="text-[#f7ba2b]" />
          <p className="text-sm">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
