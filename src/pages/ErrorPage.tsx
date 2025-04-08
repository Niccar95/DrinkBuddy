import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="errorPage">
      <div className="wrapper">
        <img
          className="cocktailImage"
          src="/src/assets/cocktails.png"
          alt="Cocktails"
        ></img>
        <h1>404, drink not found...</h1>
        <button className="homeButton" onClick={() => navigate("/")}>
          Back to Home Page
        </button>
      </div>
    </section>
  );
};
