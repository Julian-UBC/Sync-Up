import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

import "./LandingImage.css";
import { useNavigate } from "react-router-dom";

export const LandingImage = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("login", {
      state: {
        isSignUp: false,
      },
    });
  };

  const handleSignUp = () => {
    navigate("login", {
      state: {
        isSignUp: true,
      },
    });
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={`h-screen justify-center items-center`}>
        <div className={`h-screen absolute w-full background-image`}></div>
        <div className="relative flex justify-center items-center h-full">
          <div className="mt-1/10">
            <h1 className="text-main text-center text-8xl font-semibold leading-12 shadow-text">
              Sync Up
            </h1>
            <p className="text-white my-8 text-center text-4xl font-semibold leading-12">
              NO MORE PROCASTINATING <br />
              Plan your study with your friends now!
            </p>
            <div className="flex gap-4 justify-center mt-64">
              <Button
                variant="outlined"
                className="border-main bg-main rounded-md text-white text-3xl py-4 px-8 hover:bg-transparent hover:border-main hover:border-4"
                onClick={handleLogIn}
              >
                Log In
              </Button>
              <Button
                variant="outlined"
                className="border-main border-4 rounded-md text-white text-3xl py-4 px-8 hover:bg-main hover:border-main hover:border-4"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};
