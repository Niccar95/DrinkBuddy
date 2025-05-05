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
  hamburgerBackgroundColor: string;
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
    backgroundColor: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    textColor: "#1D3557",
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    cardBackground: "linear-gradient(135deg, #FFFFFF 0%, #F1F1F1 100%)",
    shadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    accentColor: "#E63946",
    asideBackground: "#fffbe6",
    asideTextColor: "#1D3557",
    asideBorderColor: "#ffd166",
    toggleColor: "#fff",
    hamburgerBackgroundColor: "black",
  },

  dark: {
    name: "Dark",
    backgroundColor: "linear-gradient(135deg, #1B263B 0%, #0d1b2a 100%)",
    textColor: "#F1FAEE",
    borderStyle: "solid",
    borderColor: "#457B9D",
    cardBackground: "linear-gradient(135deg, #2A3D5F 0%, #1F2A3E 100%)",
    shadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
    accentColor: "#F4A261",
    asideBackground: "#fffbe6",
    asideTextColor: "#1D3557",
    asideBorderColor: "#ffd166",
    toggleColor: "#000",
    hamburgerBackgroundColor: "white",
  },
};

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  toggleTheme: () => {},
});
