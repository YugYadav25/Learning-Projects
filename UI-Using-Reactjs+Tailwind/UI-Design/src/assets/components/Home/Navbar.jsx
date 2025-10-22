import React from "react";
import logo from "../../../assets/creatix.svg"; // Update to your actual asset path

const Navbar = () => (
  <nav className="flex items-center justify-between bg-black px-8 py-4 rounded-full mt-6 mx-6">
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Creatix Logo" className="h-8 w-8" />
      <span className="text-white text-lg font-bold">Creatix</span>
    </div>
    <ul className="flex items-center space-x-10">
      <li><a href="#" className="text-white hover:text-green-400">About Us</a></li>
      <li><a href="#" className="text-white hover:text-green-400">Services</a></li>
      <li><a href="#" className="text-white hover:text-green-400">Projects</a></li>
      <li><a href="#" className="text-white hover:text-green-400">Reviews</a></li>
    </ul>
  </nav>
);

export default Navbar;
