import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import {
  HomeOutlined,
  CalendarMonthOutlined,
  GroupsOutlined,
  SettingsOutlined,
  MenuBookOutlined,
} from '@mui/icons-material';

import './Sidebar.css';

let useClickInside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [page, setPage] = useState(0);

  const routes = [
    {
      path: '/',
      title: 'Home',
      icon: <HomeOutlined />,
    },
    { path: 'schedule', title: 'Schedule', icon: <CalendarMonthOutlined /> },
    { path: 'meeting', title: 'Meeting', icon: <GroupsOutlined /> },
  ];

  let domNode = useClickInside(() => {
    setIsOpen(false);
  });

  const handleMouseEnterSidebar = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(160 + page * 52)
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.setProperty('--y-pos', 160 + page * 52 + 'px');
  }, [page]);

  const handleClick = (idx) => {
    console.log('click', idx)
    setPage(idx);
  }

  return (
    <div className="flex">
      <div
        className={` ${
          isOpen ? 'translate-x-0' : 'translate-x-[-185px]'
        } ease-in-out w-[265px] bg-main text-white h-screen p-4 pt-8 duration-[.4s] fixed sidebar`}
        ref={domNode}
        onMouseEnter={handleMouseEnterSidebar}
      >
        <Link to="/" className={`${isOpen ? 'translate-x-0' : 'translate-x-[185px]'} ease-in-out transition-transform duration-[.4s] flex gap-x-4 items-center p-2 text-2xl`}>
          <MenuBookOutlined className="" />
          <h1 className={`${!isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opcaity-100'} ease-in-out transition origin-left duration-[.4s] font-medium`}>
            Sync Up
          </h1>
        </Link>
        <div className="pt-8">
          {routes.map((item, index) => (
            <div className="mb-3">
              <NavLink
                to={item.path}
                key={index}
                onClick={() => handleClick(index)}
                className={`${isOpen ? 'translate-x-0' : 'translate-x-[185px]'} ease-in-out transition-transform duration-[.4s] flex rounded-md p-2 cursor-pointer text-white hover:bg-white hover:text-secondary text-md items-center gap-x-4 
              ${item.gap ? 'mt-9' : 'mt-2'} ${
                  index === 0 && 'bg-light-white'
                } `}
                activeClassName="active"
              >
                {item.icon}
                <span
                  className={`${!isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'} ease-in-out origin-left transition duration-[.2s]`}
                >
                  {item.title}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
        <NavLink
          to="/profile"
          className={`${isOpen ? 'translate-x-0' : 'translate-x-[185px]'} ease-in-out transition-transform duration-[.4s] absolute bottom-0 w-full left-0 flex rounded-md p-2 cursor-pointer text-white hover:bg-white hover:text-secondary text-md items-center gap-3 text-sm w-[calc(100%-2rem)] left-[1rem] bottom-[1rem]`}
          onClick={() => handleClick(-4)}
        >
          <Avatar sx={{ bgcolor: deepOrange[500], fontSize: '16px', width: 36, height: 36 }}>JW</Avatar>
          <div className={`${!isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'} ease-in-out flex transition h-max-[36px] origin-left duration-[.4s] items-center justify-between w-full`}>
            <div className="flex flex-col items-start w-max">
              <h3 className="font-semibold">Julian Widjaja</h3>
              <p className="text-xs">View Profile</p>
            </div>
            <SettingsOutlined />
          </div>
        </NavLink>
      </div>
      <main className={`${isOpen ? 'pl-[265px]' : 'pl-20'} transition-[padding] ease-in-out duration-[.4s] w-full bg-[#e9f1f1] min-h-[100vh]`}>{children}</main>
    </div>
  );
};
