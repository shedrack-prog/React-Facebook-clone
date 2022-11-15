import React, { useState } from "react";
import "../App.css";

import { ArrowDownwardRounded } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SidebarData } from "../data";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-[#f0f2f5] flex flex-col   h-[100%] sidebar ">
      <div
        className={` ${
          open ? "h-[100%] " : "h-[475px] overflow-y-hidden"
        } flex gap-1 flex-col  `}
      >
        <div>
          <div className="flex gap-2 items-center cursor-pointer">
            {/* <img src="" alt="" /> */}
            <FacebookIcon
              style={{ fontSize: "2rem" }}
              className=" text-blue-800 rounded-full"
            />
            <h2 className="text-sm font-semibold text-[#5f6061]">
              Shedrack Tobiloba
            </h2>
          </div>

          {SidebarData.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 cursor-pointer hover:bg-[#e4e6e9] transition-all p-3 
            items-center "
            >
              <span className="text-[#1979e7] font-bold text-lg ">
                {item.icon}
              </span>
              <p className="text-sm  text-[#5f6061]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className=" flex item-center px-2 py-3 gap-2
      cursor-pointer hover:hover:bg-[#e4e6e9] "
      >
        <ArrowDownwardRounded
          className={`${open && "rotate-180"} text-[#1979e7]`}
        />

        <p className=" text-[#5f6061] text-sm">
          {open ? "See less" : "See more"}
        </p>
      </div>

      {/* state changer to see more or see less */}
    </div>
  );
};

export default SideBar;
