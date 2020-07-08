import React from "react";

import "./header.style.css";

import title from "../../assets/title.png";
import crown from "../../assets/crown.jpg";

const Header = () => {
  return (
    <header>
      <div className="header-details">
        <div className="title">
          <img className="title-img" src={title} alt="" />
        </div>
        <h2 className="subtitle">Characters</h2>
        <img className="crown-img" src={crown} alt="" />
      </div>
    </header>
  );
};

export default Header;
