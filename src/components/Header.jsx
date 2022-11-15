import React, { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth, signOut } from "firebase/auth";

// react icons
import { BsMessenger } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { Menu } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Header = () => {
  // const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="w-full h-[48px] fixed z-10 px-2 py-1 bg-white shadow-sm">
      <div className="px-4 flex items-center justify-between w-full">
        <div className="left-bar flex items-center justify-center gap-3">
          <FacebookIcon
            style={{ fontSize: "2rem" }}
            className=" text-blue-800 rounded-full"
          />
          <div
            className="bg-[#f2f2f2] flex-1   justify-center md:justify-start
           cursor-pointer p-1 rounded-full md:rounded-3xl flex items-center md:px-1 text-[#606266]"
          >
            <SearchIcon fontSize="1.5rem" />
            <input
              type="text"
              placeholder="Search Facebook"
              className=" hidden lg:block w-full outline-none bg-transparent border-none"
            />
          </div>
        </div>

        <div className="hidden md:flex middle-bar items-center justify-center gap-3">
          <div
            className="  hover:bg-[#f2f2f2] w-[65px] transition-all duration-200ms
            h-[39px] flex flex-col items-center justify-center
          cursor-pointer rounded-sm border-b-2 border-blue-500"
          >
            <HomeIcon
              style={{ fontSize: "1.5rem" }}
              className="text-[#1b74e4]  "
            />
            {/* <div className="bg-[#1b74e4] h-[3px] w-full flex items-end justify-end"></div> */}
          </div>
          <div className="hover:bg-[#f2f2f2] w-[65px] transition-all duration-200ms h-[45px] flex flex-col items-center justify-center cursor-pointer rounded-md">
            <OndemandVideoIcon
              style={{ fontSize: "1.5rem" }}
              className="text-[#939496]"
            />
          </div>
          <div className="hover:bg-[#f2f2f2] w-[65px] transition-all duration-200ms h-[45px] flex flex-col items-center justify-center cursor-pointer rounded-md">
            <GroupsIcon
              style={{ fontSize: "1.5rem" }}
              className="text-[#939496]"
            />
          </div>
          <div className="hover:bg-[#f2f2f2] w-[65px] transition-all duration-200ms h-[45px] flex flex-col items-center justify-center cursor-pointer rounded-md">
            <SportsEsportsIcon
              style={{ fontSize: "1.5rem" }}
              className="text-[#939496]"
            />
          </div>
        </div>
        <div className="right-bar flex gap-2 items-center justify-center ">
          <div className=" bg-[#e1e1e2a9]  hidden md:block rounded-full text-[#2d2d2e] hover:bg-[#d8dadf] p-1 transition-all cursor-pointer">
            <Menu />
          </div>
          <div className=" bg-[#e1e1e2a9]  md:hidden rounded-full text-[#2d2d2e] hover:bg-[#d8dadf] p-1 transition-all cursor-pointer">
            <AddIcon />
          </div>
          <div className=" relative bg-[#e1e1e2a9] rounded-full text-[#2d2d2e] hover:bg-[#d8dadf] p-[10px] transition-all cursor-pointer">
            <BsMessenger />
            <span className="absolute bg-[#e41e3f] text-xs flex items-center justify-center text-white w-[19px] h-[19px] top-[-3px] right-[-3px] rounded-full ">
              1
            </span>
          </div>
          <div className="relative bg-[#e1e1e2a9] rounded-full text-[#2d2d2e] hover:bg-[#d8dadf] p-[10px] transition-all cursor-pointer">
            <AiFillBell />
            <span className="absolute bg-[#e41e3f] text-xs flex items-center justify-center text-white p-1 w-[18px] h-[18px] top-[-3px] right-0 rounded-full ">
              55
            </span>
          </div>
          <div
            onClick={handleLogOut}
            className=" bg-[#e1e1e2a9] rounded-full text-[#2d2d2e]
             hover:bg-[#d8dadf] p-1 transition-all cursor-pointer"
          >
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
