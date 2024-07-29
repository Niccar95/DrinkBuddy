import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Layout = () => {
  return (
    <>
      <header>
        <div className="logoContainer">
          <img className="logoImg" src={logo}></img>
        </div>
        <nav>
          <ul>
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
