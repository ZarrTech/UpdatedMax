import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { navs } from "../page/tet";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [open, SetOpen] = useState(false);
  return (
    <>
      <nav className=" bg-black w-screen md:p-5 pb-2 fixed flex justify-between top-0 left-0 z-50 ">
        <ul
          className={` bg-black absolute md:static w-full text-wtc md:flex gap-7 md:items-center md:justify-center  text-center font-medium  md:font-normal text-sm font-inter md:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-0" : " -top-96"
          }`}
        >
          {navs.map((nav) => {
            return (
              <li key={nav.name} className="list-item md:my-0 my-7 text-[18px] font-[500] active:">
                <NavLink onClick={() => SetOpen(false)} className="" to={nav.link}>
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => SetOpen(!open)}
          className={` text-white md:hidden ml-9 mt-5 text-3xl cursor-pointer z-10 `}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
