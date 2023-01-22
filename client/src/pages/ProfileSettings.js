import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { Button } from '../components/form/Button';

const settings = [
  {
    name: 'Personal Information',
    icon: <PersonIcon />,
  },
  {
    name: 'Account Settings',
    icon: <SettingsIcon />,
  },
  {
    name: 'Notifications',
    icon: <NotificationsIcon />,
  },
];

const PersonalInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[calc(100vh-80px)] rounded-xl bg-white p-12 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="flex w-full gap-8">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            className="w-full"
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            className="w-full"
          />
        </div>
        <div className="flex w-full gap-8">
          <TextField
            required
            type="email"
            id="outlined-required"
            label="Email"
            className="w-full"
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Phone"
            className="w-full"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+1</InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex w-full gap-8">
          <TextField
            required
            id="outlined-required"
            label="School/Company"
            className="w-full"
          />
          <TextField
            required
            id="outlined-required"
            label="Location"
            className="w-full"
          />
        </div>
        <TextField
          id="outlined-textarea"
          label="Bio"
          placeholder="Tell us a bit more about yourself."
          multiline
          minRows={5}
        />
      </div>
      <Button type="submit" className="rounded-xl py-3 w-[200px]">Update Profile</Button>
    </form>
  );
};

export const ProfileSettings = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="flex gap-6 p-10">
      <div className="rounded-xl bg-white pt-12 pb-32 flex flex-col items-center w-max flex-none">
        <Avatar
          className="mb-12"
          sx={{
            bgcolor: deepOrange[500],
            fontSize: '48px',
            width: 150,
            height: 150,
          }}
        >
          JW
        </Avatar>
        <div className="w-full">
          {settings.map(({ name, icon }, idx) => (
            <div
              className={`${
                page === idx ? 'text-secondary' : 'text-gray'
              } px-10 py-4 flex gap-3 cursor-pointer hover:bg-[#ddf8f6] `}
              onClick={() => {
                setPage(idx);
              }}
            >
              {icon}
              <h2 className="">{name}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Page Display */}
      <PersonalInfo />
    </div>
  );
};
