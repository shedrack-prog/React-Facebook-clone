import React, { useEffect, useState } from "react";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import profilPic from "../assets/person3.jpg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { postData } from "../data";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Post = () => {
  const user = useSelector(selectUser);
  const [post, setPost] = useState([]);

  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setPost(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       );
  //     });
  // }, []);

  return postData.map((post) => (
    <div
      key={post.id}
      className="mt-[1.5rem] bg-white h-[620px] shadow-md rounded-lg"
    >
      <div className="flex justify-between items-center p-3">
        <div className=" flex gap-1 items-center ">
          <img
            src={post.profilepic}
            alt=""
            className="w-[35px] h-[35px] rounded-full object-cover cursor-pointer"
          />
          <div>
            <p className="text-[13px] font-semibold cursor-pointer hover:underline">
              {post.userName}
            </p>
            <p className="flex items-center text-gray-600">
              <span className="text-xs cursor-pointer">{post.time}.</span>
              <span className="text-xs">
                <PublicRoundedIcon fontSize="10px" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-[2px] cursor-pointer">
          <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
          <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
          <span className="w-[3px] h-[3px] rounded-full bg-gray-700"></span>
        </div>
      </div>

      {/* photo here */}

      <div className="flex flex-col  ">
        <p className="text-sm px-3 mb-2">{post.caption}</p>

        <div className="h-[450px] w-full bg-transparent">
          <img src={post.photo} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-0 items-center">
            <p>
              <ThumbUpIcon fontSize="12px" className="text-blue-500" />
            </p>
            <p>
              <FavoriteIcon fontSize="12px" className="text-[#f3425f]" />
            </p>
            <p className="text-gray-800 text-xs">{post.likes}</p>
          </div>

          <div className="text-xs text-gray-800">
            <p>
              {post.comment} Comments <span>{post.shares} shares</span>
            </p>
          </div>
        </div>
        <hr className="w-[90%] m-auto h-[2px] bg-gray-400 mt-2 " />
        <div className="flex justify-around items-center py-3">
          <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
            <ThumbUpOffAltIcon fontSize="12px" />{" "}
            <span className="text-xs">Like</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
            <ChatBubbleOutlineIcon fontSize="12px" />{" "}
            <span className="text-xs">Comment</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
            <ShareIcon fontSize="12px" /> <span className="text-xs">Share</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Post;
