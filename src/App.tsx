import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./styles/main.scss";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { useState } from "react";
import { ThemeButton } from "./components/ThemeButton";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.dark);

  const toggleTheme = () => {
    if (theme.name === "Dark") {
      setTheme(themes.light);
      console.log(theme.name);
    } else {
      setTheme(themes.dark);
      console.log(theme.name);
    }
  };

  //const theme = {
  //name: "Dark",
  //backgroundColor: "black",
  //textColor: "white",
  //};

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
          <ThemeButton click={toggleTheme}>
            <>Change theme to: {theme.name === "Dark" ? "Light" : "Dark"}</>
          </ThemeButton>
          <RouterProvider router={router} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
