import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";

import { login, logout, selectUser } from "./features/userSlice";

import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "./firebase";
import AuthScreen from "./components/AuthScreen";

const App = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: "photoUrl",
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            displayName: auth.currentUser.displayName,
            uid: userAuth.uid,
            photoUrl: auth.currentUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return <>{!user ? <AuthScreen /> : <HomeScreen />}</>;
};

export default App;
