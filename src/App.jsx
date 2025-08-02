import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./Theme/Themecontext";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
      </ThemeProvider>
    </>
  );
};

export default App;
