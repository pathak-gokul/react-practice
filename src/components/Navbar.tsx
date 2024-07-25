import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">GP</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Me
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
