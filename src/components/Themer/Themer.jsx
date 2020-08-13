import React from "react";

import MoonDark from "./../../images/moon-dark";
import SunDark from "../../images/sun-dark";
import MoonWhite from "./../../images/moon-white";
import SunWhite from "../../images/sun-white";

import "./Themer.css";

const Themer = ({ themeChange, dark }) => {
  return (
    <div className="themer">
      {dark ? <SunWhite /> : <SunDark />}

      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => themeChange(e.target.checked)}
        />
        <span className="slider round"></span>
      </label>
      {dark ? <MoonWhite /> : <MoonDark />}
    </div>
  );
};

export default Themer;
