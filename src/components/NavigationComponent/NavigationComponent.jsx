import React from "react";
import "./NavigationComponent.scss";
import Logo from "../../assets/Logo.jsx";

export default function NavigationComponent() {
  return (
    <div className="banner">
      <div className="banner__logo">
        <Logo />
      </div>
      <div className="banner-items">
        <div className="banner-items__bag">bag</div>
        <img className="banner-items__search" alt="temp"></img>
        <button className="banner-items__burger-menu">burger</button>
      </div>
    </div>
  );
}
