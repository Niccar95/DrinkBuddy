import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

export const Layout = () => {
  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    console.log("Menu clicked");
    if (!isMenuClicked) {
      setBurgerClass("burgerBar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burgerBar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setBurgerClass("burgerBar unclicked");
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  return (
    <>
      <header>
        <div className="logoContainer">
          <img className="logoImg" src={logo}></img>
        </div>
        <nav>
          <div className="hamburgerMenu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className={menuClass}>
            <ul className="navList">
              <li>
                <NavLink to={"/"} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/drinks"} onClick={closeMenu}>
                  Drinks
                </NavLink>
              </li>
              <li>
                <NavLink to={"/favourites"} onClick={closeMenu}>
                  Favourites
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navList">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/drinks"}>Drinks</NavLink>
            </li>
            <li>
              <NavLink to={"/favourites"}>Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>some content</footer>
    </>
  );
};
