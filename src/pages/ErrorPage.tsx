import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="errorPage"
      style={{
        background: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div className="wrapper">
        <div className="imageWrapper">
          <img
            className="cocktailImage"
            src={`/cocktails-${theme.name}.png`}
            alt="Cocktails"
          ></img>
        </div>
        <h1>404, drink not found...</h1>
        <button className="homeButton" onClick={() => navigate("/")}>
          Back to Home Page
        </button>
      </div>
    </section>
  );
};
