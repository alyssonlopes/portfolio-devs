import React from "react";
import "./style.css";

const Header = ({ title, children }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">{title}</h1>
      {children}
    </header>
  );
};

export default Header;
