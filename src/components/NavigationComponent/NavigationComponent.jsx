import React from "react";
import "./NavigationComponent.scss";
import Logo from "../../assets/Logo";
import Bag from "../../assets/Bag";
import SearchIcon from "../../assets/SearchIcon";
import BurgerMenu from "../../assets/BurgerMenu";

export default function NavigationComponent() {
  return (
    <div className="banner">
      <div className="banner__logo">
        <Logo />
      </div>
      <div className="banner-items">
        <div className="banner-items__bag">
          <Bag />
        </div>
        <div className="banner-items__search">
          <SearchIcon />
        </div>
        <button className="banner-items__burger-menu">
          <BurgerMenu />
        </button>
      </div>
    </div>
  );
}
