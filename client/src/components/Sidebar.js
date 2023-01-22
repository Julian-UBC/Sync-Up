import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  HomeOutlined,
  CalendarMonthOutlined,
  GroupsOutlined,
  SettingsOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";

import "./Sidebar.css";

let useClickInside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const routes = [
    {
      path: "/",
      title: "Home",
      icon: <HomeOutlined />,
    },
    { path: "schedule", title: "Schedule", icon: <CalendarMonthOutlined /> },
    { path: "meeting", title: "Meeting", icon: <GroupsOutlined /> },
    {
      path: "settings",
      title: "Settings ",
      icon: <SettingsOutlined />,
      gap: true,
    },
  ];

  let domNode = useClickInside(() => {
    setIsOpen(false);
  });

  const handleMouseEnterSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex">
      <div
        className={` ${
          isOpen ? "w-72" : "w-20 "
        } bg-primary text-white p-5 pt-8 duration-300 fixed h-screen z-50`}
        ref={domNode}
        onMouseEnter={handleMouseEnterSidebar}
      >
        <Link to="/" className={`flex gap-x-4 items-center p-2 text-2xl`}>
          <MenuBookOutlined className="" />
          <h1 className={`${!isOpen && "hidden"} origin-left font-medium`}>
            Sync Up
          </h1>
        </Link>
        <div className="pt-6">
          {routes.map((item, index) => (
            <div className="">
              <NavLink
                to={item.path}
                key={index}
                className={`flex rounded-md p-2 cursor-pointer text-white hover:bg-secondary hover:text-black text-md items-center gap-x-4 
              ${item.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
                activeClassName="active"
              >
                {item.icon}
                <span
                  className={`${!isOpen && "hidden"} origin-left duration-200`}
                >
                  {item.title}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <main className={`${isOpen ? "pl-72" : "pl-20"} w-full`}>{children}</main>
    </div>
  );
};
