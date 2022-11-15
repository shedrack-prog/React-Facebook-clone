import React, { useState } from "react";
import Login from "./Login";
import SignupScreen from "./SignupScreen";

const AuthScreen = () => {
  const [screen, setScreen] = useState("login");
  return (
    <>
      {screen === "login" && <Login screen={screen} setScreen={setScreen} />}
      {screen === "signup" && (
        <SignupScreen screen={screen} setScreen={setScreen} />
      )}
    </>
  );
};

export default AuthScreen;
