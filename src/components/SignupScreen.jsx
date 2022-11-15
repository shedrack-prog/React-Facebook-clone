import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../features/userSlice";
import { app } from "../firebase";

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

const SignupScreen = ({ screen, setScreen }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const photoUrlRef = useRef();
  // const fullNameRef = useRef();

  const HandleSignup = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("enter your full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        if (userAuth.user) {
          updateProfile({
            displayName: name,
            photoUrl: photoUrl,
          }).then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
              })
            );
          });
        }
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <div className="  flex items-center justify-center flex-col pt-[5rem]">
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 mb-4">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-[200px]"
          />
          <p className="text-center text-[18px] text-gray-700 px-3">
            Connect with friends and the world around you on Facebook
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-[2rem] py-6">
          <form className="flex flex-col items-center gap-5 justify-center w-full px-5">
            <input
              type="text"
              placeholder="Full Name"
              // ref={fullNameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 rounded-3xl outline-none
          font-semibold py-3 w-full px-4 text-[19px] text-black focus:border-2
           focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Email"
              // ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 rounded-3xl outline-none
          font-semibold py-3 w-full px-4 text-[19px] text-black focus:border-2
           focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="PhotoUrl"
              // ref={photoUrlRef}
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="bg-gray-100 rounded-3xl outline-none
          font-semibold py-3 w-full px-4 text-[19px] text-black focus:border-2
           focus:border-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              // ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 rounded-3xl outline-none
          font-semibold py-3 w-full px-4 text-[19px] text-black focus:border-2
           focus:border-blue-400"
            />

            <button
              onClick={HandleSignup}
              type="submit"
              className="py-3 px-8 bg-blue-600 rounded-3xl mt-5 text-white
               font-semibold hover:scale-95"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <p className="text-md text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => setScreen("login")}
          className="text-blue-500 cursor-pointer"
        >
          Login now
        </span>
      </p>
    </div>
  );
};

export default SignupScreen;
