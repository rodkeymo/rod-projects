import React from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-gradient-to-b from-gray-600  via-black to-purple-700 py-7">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a href="#" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
        Bloow
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <a href="#"className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-4">
              Bloow tv
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              Bloow Music
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              Trending
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
   );
}
 
export default Nav;