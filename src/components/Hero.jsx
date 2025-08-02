import React, { use, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { useTheme } from "../Theme/Themecontext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return <div className="">This is hereo section</div>;
};

export default Hero;
