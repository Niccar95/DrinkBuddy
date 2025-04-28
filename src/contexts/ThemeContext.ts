import { createContext } from "react";
export interface ITheme {
  name: string;
  backgroundColor: string;
  textColor: string;
  borderStyle: string;
  borderColor: string;
  cardBackground: string;
  shadow: string;
  accentColor: string;
  asideBackground: string;
  asideTextColor: string;
  asideBorderColor: string;
  toggleColor: string;
}
export interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export const themes: IThemes = {
  light: {
    name: "Light",
    backgroundColor: "#F5F5F5",
    textColor: "#1D3557",
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    cardBackground: "#FFFFFF",
    shadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    accentColor: "#E63946",
    asideBackground: "#fffbe6",
    asideTextColor: "#1D3557",
    asideBorderColor: "#ffd166",
    toggleColor: "#fff",
  },

  dark: {
    name: "Dark",
    backgroundColor: "#1B263B",
    textColor: "#F1FAEE",
    borderStyle: "solid",
    borderColor: "#457B9D",
    cardBackground: "#2A3D5F",
    shadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
    accentColor: "#F4A261",
    asideBackground: "#fffbe6",
    asideTextColor: "#1D3557",
    asideBorderColor: "#ffd166",
    toggleColor: "#000",
  },
};

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  toggleTheme: () => {},
});
