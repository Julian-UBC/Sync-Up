import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../form/Button';
import { WebcamComponent } from './WebcamComponent';
import { MeetingDescription } from './MeetingDescription';

const Header = ({ title }) => {
  return (
    <div className="w-full border-slate-300 border-b-[1px] flex items-center py-4 gap-5">
      <Link to="/">
        <Button type="button" className="w-10 h-10" muted>
          {'<'}
        </Button>
      </Link>
      <h1 className="font-semibold tracking-[0.44px] text-text text-2xl">
        SyncUp Conference
      </h1>
    </div>
  );
};

export const Room = ({ title, description }) => {
  return (
    <div className="w-full h-full p-4 flex gap-4">
      <div className="w-full h-full flex flex-col gap-6">
        <Header title={title} />
        <WebcamComponent />
      </div>
      <MeetingDescription title={title} description={description} />
    </div>
  );
};
