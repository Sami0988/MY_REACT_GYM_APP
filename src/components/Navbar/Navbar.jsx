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
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isMeanuOpen, setIsMeanuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]); // Log theme changes for debugging

  return (
    <div className="flex justify-between items-center text-gray-800 dark:bg-slate-900 dark:text-white h-15 px-5 md:px-20 shadow-md bg-[#f2f5fa]">
      {/* Logo */}
      <div className="flex items-start ">
        <img src={logo} alt="logo" className="w-[150px] h-[100px] pt-4" />

        <div className="hidden sm:flex flex-col justify-center sm:-ml-10 mt-6 text-[#1A1363] dark:text-white">
          <span className="text-xl font-bold">STAMINA</span>
          <span className="text-xl font-bold">FITNESS</span>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base pl-5">
        {NavLink.map((item, index) => (
          <li
            key={index}
            className="text-sm p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
          >
            {item.text}
          </li>
        ))}
        <button className="bg-yellow-300 px-4 py-1 rounded-full font-semibold hover:bg-yellow-400 transition">
          Register
        </button>
      </ul>

      {/*Dark and light theme toogle*/}

      <div>
        <button onClick={toggleTheme} className="pl-25 pt-2 text-2xl ">
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden block text-5xl cursor-pointer">
        <IoMenu
          onClick={() => {
            console.log("Menu icon clicked!");
            setIsMeanuOpen(!isMeanuOpen);
          }}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute xl:hidden top-16 w-full right-0 bg-white flex flex-col items-center gap-6 font-semibold text-lg
    transform transition-transform duration-300 ease-in-out
    ${
      isMeanuOpen
        ? "opacity-100 pointer-events-auto translate-y-0 z-50 "
        : "opacity-0 pointer-events-none -translate-y-full"
    }`}
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
