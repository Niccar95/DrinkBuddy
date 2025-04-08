import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./styles/main.scss";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { useState } from "react";
import { ThemeButton } from "./components/ThemeButton";
import { Slide, ToastContainer } from "react-toastify";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

function App() {
  const [colorTheme, setTheme] = useState<ITheme>(themes.dark);

  const toggleTheme = () => {
    if (colorTheme.name === "Dark") {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={colorTheme}>
        <div
          style={{
            backgroundColor: colorTheme.backgroundColor,
            color: colorTheme.textColor,
            boxShadow: colorTheme.shadow,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <ThemeButton click={toggleTheme}>
            <Classic
              duration={750}
              toggled={colorTheme.name === "Dark"}
              toggle={toggleTheme}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </ThemeButton>
          <p> {colorTheme.name === "Dark" ? "Light" : "Dark"}</p>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={colorTheme.name.toLowerCase() === "dark" ? "dark" : "light"}
            transition={Slide}
          />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
