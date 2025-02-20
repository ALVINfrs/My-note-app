import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ darkMode, toggle }) => {
  return (
    <button className="theme-toggle" onClick={toggle}>
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
