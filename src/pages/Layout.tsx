import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeButton } from "../components/ThemeButton";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

export const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
            <ThemeButton click={toggleTheme}>
              <Classic
                duration={750}
                toggled={theme.name === "Dark"}
                toggle={toggleTheme}
                placeholder={undefined}
                value={theme.name === "Dark" ? "dark" : "light"}
                color="primary"
                children={null}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </ThemeButton>
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
