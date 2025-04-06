import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./styles/main.scss";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { useState } from "react";
import { ThemeButton } from "./components/ThemeButton";
import { Slide, ToastContainer } from "react-toastify";

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
            <>
              Change theme to: {colorTheme.name === "Dark" ? "Light" : "Dark"}
            </>
          </ThemeButton>
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
