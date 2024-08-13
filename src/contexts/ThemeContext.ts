import { createContext } from "react";

export interface ITheme {
  name: string;
  backgroundColor: string;
  textColor: string;
}

export interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
  light: {
    name: "Light",
    backgroundColor: "white",
    textColor: "black",
  },
  dark: {
    name: "Dark",
    backgroundColor: "#22303C",
    textColor: "white",
  },
};

export const ThemeContext = createContext<ITheme>(themes.dark);
