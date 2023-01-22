import React, { useState } from 'react';
import { Button } from '../form/Button';

import SendIcon from '@mui/icons-material/Send';

import './MeetingDescription.css';

const Description = ({ title, description }) => {
  return (
    <div className="rounded-xl bg-[#edf0f5] w-full h-max p-6 flex flex-col gap-2">
      <h2 className="meeting-title text-lg font-semibold text-left">{title}</h2>
      <p className="meeting-description text-left text-sm">{description}</p>
    </div>
  );
};

const GroupChat = () => {
  const [showChat, setShowChat] = useState(true);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="rounded-xl bg-[#edf0f5] w-full h-full relative">
      {/* Header */}
      <div className="flex justify-between items-center border-slate-300 border-b-[1px] p-6">
        <h2 className="font-medium text-lg">Group Chat</h2>
        <div className="flex">
          <div
            className={`${
              showChat ? 'text-green bg-light-green' : 'text-dark-gray'
            } cursor-pointer px-4 py-2 rounded-xl text-xs font-medium`}
            onClick={() => setShowChat(true)}
          >
            Message
          </div>
          <div
            className={`${
              showChat ? 'text-dark-gray' : 'text-green bg-light-green'
            } cursor-pointer px-4 py-2 rounded-xl text-xs font-medium`}
            onClick={() => setShowChat(false)}
          >
            Participants
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="absolute bottom-[16px] bg-white w-[calc(100%-32px)] left-[16px] rounded-xl py-4 px-5 flex justify-start">
        <input className="outline-none w-[calc(100%-36px)] text-sm" type="text" value={value} onChange={handleChange} placeholder="Write a message here..." />
        <Button className="w-[40px] h-[40px] absolute right-[8px] top-[8px]">
          <SendIcon className="rotate-[-45deg] translate-x-[1px] -translate-y-[1.5px]" fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export const MeetingDescription = ({ title, description }) => {
  return (
    <div className="flex flex-col w-[500px] gap-4">
      <Description title={title} description={description} />
      <GroupChat />
    </div>
  );
};
