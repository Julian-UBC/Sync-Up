import React, { useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import { ReactComponent as StudyIcon } from '../assets/icons/studyIcon.svg';
import { ReactComponent as SmileyIcon } from '../assets/icons/smileyIcon.svg';
import { MiniCalendar } from '../components/calendar/MiniCalendar'


import './Dashboard.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="flex justify-between items-center">
      <div className="text-left text-3xl font-semibold">Dashboard</div>
      <Badge color="secondary" variant="dot" className="cursor-pointer" onClick={handleClick}>
        <NotificationsActiveIcon />
      </Badge>
      <div className={`${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-top-right transform ease-in-out duration-[.4s] absolute min-h-[200px] right-[80px] top-[90px] w-[300px] bg-white rounded-xl z-50 p-4 flex flex-col justify-center items-center`}>
        <p className="text-gray">No Notifications</p>
      </div>
    </div>
  );
};

const Welcome = ({ user }) => {
  return (
    <div className="w-full rounded-2xl px-16 pb-8 pt-14 mt-4 bg-light-green text-lg font-semibold relative">
      <div className="w-1/2">
        <h1 className="text-left mb-2.5">Welcome back, {user.split(' ')[0]}</h1>
        <p className="text-left font-light !leading-6">
          You've spent 128 minutes on studying. <br /> Keep it up and improve
          your results!
        </p>
      </div>

      {/* Icon */}
      <StudyIcon className="absolute w-[35%] h-auto right-[100px] bottom-[32px]" />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-screen py-10 px-20 text-text gap-8">
      <Header />
      <Welcome user="Julian Widjaja" />
      <div className="flex w-full h-full gap-4">
        {/* Calendar */}
        <div className="w-full h-full bg-white rounded-xl shadow-sm px-6 py-4 flex flex-col items-start gap-2 relative">
          <h2 className="font-semibold text-gray">Calendar</h2>
          <div className="w-full h-full overflow-scroll"><MiniCalendar /></div>
        </div>

        <div className="flex flex-col w-[40%] h-full gap-4">
          <div className="w-full bg-white rounded-xl shadow-sm px-6 py-4 flex flex-col items-start gap-2 h-max">
            <h2 className="font-semibold text-gray">SyncUp Points</h2>
            <h3 className="font-extrabold text-5xl">596</h3>
          </div>
          <div className="w-full h-full bg-light-green rounded-xl shadow-sm px-6 py-4 relative flex justify-center">
            <div class="progress scale-[2.1] origin-top max-h-[90px] overflow-hidden">
              <div class="barOverflow">
                <div class="bar rotate-[205deg]"></div>
              </div>
            </div>
            <SmileyIcon className="absolute left-1/2 translate-x-[-50%] top-[60px]" width={60} height={60} />
            <div className="absolute left-1/2 translate-x-[-50%] font-semibold top-[135px] text-green text-xl">Superb!</div>
            <div className="absolute h-max w-[calc(100%-48px)] flex gap-3 left-[24px] bottom-[16px]">
              <h2 className="font-bold text-5xl">91%</h2>
              <p className="text-left text-sm">of successful meeting schedule</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
