import React from "react";
import { Link } from "react-router-dom";
import { LandingImage } from "../components/landing/LandingImage";

export const LandingPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center">
      <LandingImage />
    </div>
  );
};
