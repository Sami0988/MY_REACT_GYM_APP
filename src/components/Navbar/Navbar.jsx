import { Rabbit } from "lucide-react";
import React, { useEffect, useState } from "react";
import NavLink from "./NavBarItem";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTiktok,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useTheme } from "../../Theme/Themecontext";

const Navbar = () => {
  const [isMeanuOpen, setIsMeanuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  

  return (
    <div className="flex justify-between items-center text-gray-800 py-2 px-5 md:px-32">
      {/* Logo */}
      <div className="flex items-center text-[#1A1363]">
        <FaDumbbell className="text-4xl" />
        <div className="flex flex-col pl-2 leading-tight font-bold">
          <p className="text-lg">SAMUEL</p>
          <span className="text-blue-500 text-xl">FITNESS</span>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        {NavLink.map((item, index) => (
          <li
            key={index}
            className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
          >
            {item.text}
          </li>
        ))}
        <button className="bg-yellow-300 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
          Register
        </button>
      </ul>

      {/*Dark and light theme toogle*/}

      <div>
        <button onClick={toggleTheme} className="text-2xl ">
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </button>
      </div>

      {/* Social Icons */}
      <div className="hidden xl:flex items-center gap-5 text-2xl text-gray-600">
        <FaFacebook className="hover:text-blue-500 transition" />
        <FaInstagram className="hover:text-pink-500 transition" />
        <FaTiktok className="hover:text-black transition" />
        <FaLinkedin className="hover:text-blue-700 transition" />
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden block text-5xl cursor-pointer">
        <IoMenu onClick={() => setIsMeanuOpen(!isMeanuOpen)} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute xl:hidden top-15 w-full right-0 bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          isMeanuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <ul className="flex flex-col items-center gap-4">
          {NavLink.map((item, index) => (
            <li
              key={index}
              className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
            >
              {item.text}
            </li>
          ))}
          <button className="bg-yellow-300 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
            Register
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
