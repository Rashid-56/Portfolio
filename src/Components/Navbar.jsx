import React from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {
 

  return (
    <div>
      <div className="container w-full px-8  md:mx-6 mx-2  top-0 z-10 md:h-20 h-30 items-center fixed  bg-black">
        <div className="flex justify-between items-center flex-wrap gap-y-3 mt-8 pb-4">
          <div>
            <h1 className="font-bold name text-2xl">Rashid's Portfolio </h1>
          </div>
          <div className="">
            <ul className="flex md:gap-12 gap-3 md:justify-end justify-start list-none cursor-pointer">
            <li >
                <NavLink to={'/hero'} className={({isActive})=>`${isActive ? "text-white border-b-2 pb-1 border-cyan-500 font-extrabold":"text-gray-400"} hover:text-cyan-400 text-gray-400`}>Home</NavLink>
              </li>
              <li >
                <NavLink to={'/project'} className={({isActive})=>`${isActive ? "text-white border-b-2 pb-1 border-cyan-500 font-extrabold":"text-gray-400"} hover:text-cyan-400 text-gray-400`}>Projects</NavLink>
              </li>
              <li>
                <NavLink to={'/tech'} className={({isActive})=>`${isActive ? "text-white border-b-2 pb-1 border-cyan-500 font-extrabold":"text-gray-400"} hover:text-cyan-400 text-gray-400`}>
                  Technoligies
                </NavLink>
              </li>
              <li>
                <NavLink to={'/about'} className={({isActive})=>`${isActive ? "text-white border-b-2 pb-1 border-cyan-500 font-extrabold":"text-gray-400"} hover:text-cyan-400 text-gray-400`}>About me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
