import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Layout = () => {
  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const theme = useContext(ThemeContext);

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
        <div
          className="logoContainer"
          style={{
            borderBottom: `${theme.borderStyle} 1px ${theme.borderColor}`,
            boxShadow: theme.shadow,
          }}
        >
          <img className="logoImg" src={logo}></img>
        </div>
        <nav
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            borderBottom: `${theme.borderStyle} 1px ${theme.borderColor}`,
            boxShadow: theme.shadow,
          }}
        >
          <div className="hamburgerMenu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className={menuClass}>
            <ul className="navList">
              <li>
                <i className="bi bi-house"></i>
                <NavLink to={"/"} onClick={closeMenu}>
                  {" "}
                  Home
                </NavLink>
              </li>
              <li>
                <i className="bi bi-cup-straw"></i>
                <NavLink to={"/drinks"} onClick={closeMenu}>
                  {" "}
                  Drinks
                </NavLink>
              </li>
              <li>
                <i className="bi bi-star"></i>
                <NavLink to={"/favourites"} onClick={closeMenu}>
                  {" "}
                  Favourites
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navList">
            <li>
              <i className="bi bi-house"></i> <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <i className="bi bi-cup-straw"></i>{" "}
              <NavLink to={"/drinks"}>Drinks</NavLink>
            </li>
            <li>
              <i className="bi bi-star"></i>{" "}
              <NavLink to={"/favourites"}> Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          borderTop: `${theme.borderStyle} 1px ${theme.borderColor}`,
          boxShadow: theme.shadow,
          padding: "20px 40px",
          textAlign: "center",
        }}
      >
        <p>&copy; {new Date().getFullYear()} DrinkBuddy 🍹</p>
      </footer>
    </>
  );
};
