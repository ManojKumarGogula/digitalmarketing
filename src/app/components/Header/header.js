import React, { useState } from "react";
import SideBar from "../Sidebar";
import MenuIcon from "../../asserts/icons/menu.svg";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="absolute w-full top-0 bg-imgtrans py-16 text-bluebg font-400 text-18">
      <nav className=" w-5/6 flex items-center justify-between px-4 mx-auto max-w-7xl">
        <div>
          <a href="/" className="text-white text-lg font-bold">
            <div className="w-[6vw] md:w-[2vw] xl:w-[2vw] bg-bluebg h-[4vh] rounded-4"></div>
          </a>
        </div>
        <ul className=" w-2/6 flex justify-end items-center space-x-[2vw]">
          <li>
            <a href="/" className="text-white hidden md:block xl:block">
              Contact
            </a>
          </li>
          <li>
            <a href="/work" className="text-white hidden md:block xl:block">
              Work
            </a>
          </li>
          <li onClick={handleDrawerToggle} className="aspect-square h-[6vh]">
            <img src={MenuIcon} />
          </li>
        </ul>
      </nav>
      <SideBar setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
    </header>
  );
};

export default Header;
