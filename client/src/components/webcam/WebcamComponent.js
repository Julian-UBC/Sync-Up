import React, { useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../form/Button";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PersonIcon from "@mui/icons-material/Person";

const BasicControlButton = ({ isOn, onToggle, children }) => {
  return (
    <button
      className={`w-12 h-12 rounded-full ${
        isOn ? "backdrop-blur-xl bg-white/20" : "bg-white"
      }`}
      onClick={onToggle}
    >
      {children}
    </button>
  );
};

export const WebcamComponent = () => {
  const [onCam, setOnCam] = useState(false);
  const [onMic, setOnMic] = useState(false);

  return (
    <div className="w-full h-full relative">
      <Webcam
        audio={onMic}
        className={`${
          onCam ? "block" : "hidden"
        } w-full h-[calc(100vh-129px)] object-cover rounded-2xl`}
      />
      <div
        className={`${
          onCam ? "hidden" : "block"
        } w-full h-[calc(100vh-129px)] bg-black rounded-2xl flex justify-center items-center`}
      >
        <PersonIcon sx={{ color: "rgb(209 213 219)", fontSize: "100px" }} />
      </div>

      {/* Camera Options */}
      <div className="absolute flex items-center gap-5 bottom-[40px] left-1/2 translate-x-[-50%]">
        {/* Microphone */}
        <BasicControlButton
          isOn={onMic}
          onToggle={() => {
            setOnMic((prevState) => !prevState);
          }}
        >
          {onMic ? <MicIcon sx={{ color: "white" }} /> : <MicOffIcon />}
        </BasicControlButton>

        {/* End Button */}
        <Button className="w-16 h-16 rounded-[1.7rem]" danger>
          <CallEndIcon sx={{ color: "white" }} />
        </Button>

        {/* Video */}
        <BasicControlButton
          isOn={onCam}
          onToggle={() => {
            setOnCam((prevState) => !prevState);
          }}
        >
          {onCam ? (
            <VideocamIcon sx={{ color: "white" }} />
          ) : (
            <VideocamOffIcon />
          )}
        </BasicControlButton>
      </div>
    </div>
  );
};
