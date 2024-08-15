import { createContext } from "react";

export interface ITheme {
  name: string;
  backgroundColor: string;
  textColor: string;
  borderStyle: string;
  borderColor: string;
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
    borderStyle: "solid",
    borderColor: "black",
  },
  dark: {
    name: "Dark",
    backgroundColor: "#22303C",
    textColor: "white",
    borderStyle: "solid",
    borderColor: "white",
  },
};

export const ThemeContext = createContext<ITheme>(themes.dark);
