import React from "react";
import "./style.css";
class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <h1 className="header-title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
