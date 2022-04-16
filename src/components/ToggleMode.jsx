import React from "react";
import MoonIcon from "../assets/images/icon-moon.svg";
import SunMoon from "../assets/images/icon-sun.svg";
import { ThemeContext } from "../context/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex cursor-pointer items-center"
        >
          <h2 className="font-space font-bold text-sm tracking-[.2em] mr-4 text-color-text-second-light">
            LIGHT
          </h2>
          <img src={SunMoon} alt="" />
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex cursor-pointer items-center"
        >
          <h2 className="font-space font-bold text-sm tracking-[.2em] mr-4 text-color-text-second-light">
            DARK
          </h2>
          <img src={MoonIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Toggle;
