import { useEffect, useState } from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import RightWidgets from "./RightWidgets";
import StorySection from "./StorySection";
import StoryCard from "./StoryCard";
import Poster from "./Poster";
import Post from "./Post";

import { storiesData } from "../data";
import { useSelector } from "react-redux";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Route, Routes } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import Login from "./Login";
import SignupScreen from "./SignupScreen";

function App() {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const story_card = document.getElementById("story-card");
    // const arrowLeft = document.getElementById("arrowLeft");

    story_card &&
      story_card.addEventListener("scroll", function displayButton() {
        if (story_card.scrollLeft >= 100) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      });

    return () =>
      story_card &&
      story_card.removeEventListener("scroll", function displayButton() {
        if (story_card.scrollLeft >= 100) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      });
  }, []);

  function slideRight() {
    const slider = document.getElementById("story-card");
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  function slideLeft() {
    const slider = document.getElementById("story-card");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  // if (!user) return <Login />;
  return (
    <div className="App ">
      <div>
        <div className="">
          <Header />
        </div>

        <div
          className=" bg-[#f0f2f5] pt-[3.8rem]  flex
     justify-between px-0 md:px-8 h-[100vh]"
        >
          <div className="hidden lg:flex sidebar flex-[0.25] lg:flex-[0.3]   overflow-y-scroll">
            <SideBar />
          </div>
          <div className="overflow-x-hidden md:px-[0rem] md:flex-[0.7] xl:flex-[0.38]  Feed sm:px-[1.5rem]">
            <div
              className="flex-1 lg:flex-[0.4]   h-[15rem] md:h-[17rem] bg-white
            items-center relative overflow-hidden rounded-lg shadow-sm"
            >
              <StorySection className="" />

              <div className="flex items-center scroll-smooth scroll ">
                <div
                  id="arrowLeft"
                  onClick={slideLeft}
                  className={` bg-gray-100 rounded-full w-[40px] h-[40px]
             justify-center flex   absolute left-0 items-center opacity-0 z-10 ml-4
            hover:bg-gray-200 cursor-pointer ${open && "opacity-100"} `}
                >
                  <MdOutlineArrowBackIos />
                </div>

                <StoryCard />

                <div
                  className="bg-gray-100 rounded-full w-[40px] h-[40px]
           justify-center flex  absolute right-0 items-center z-10 mr-4 hover:bg-gray-200 cursor-pointer"
                  onClick={slideRight}
                >
                  <MdOutlineArrowForwardIos />
                </div>
              </div>

              {/* postersssssss */}
            </div>
            <Poster />
            <Post />
          </div>

          <div className=" md:flex-[0.3] lg:flex-[0.3] hidden md:flex ">
            <RightWidgets />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

// import React from "react";

// const HomeScreen = () => {
//   return <div>HomeScreen</div>;
// };

// export default HomeScreen;
