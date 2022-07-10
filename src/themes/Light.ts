import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#3b39ae",
      contrastText: "#101010",
    },
    action: {
      active: "#000",
      disabled: "#fff",
    },
    background: {
      paper: "#d9d9d9",
      default: "#E8E8E8",
    },
    grey: {
      "600": "#BCBCBC",
      "900": "#D6D6D6",
    },
    text: {
      /* title */
      primary: "#4D4D4D",
      /* Subtitle */
      secondary: "#575757",
    },
  },
  shadows: [
    "none",
    "inset 3px 3px 3px #ededed, inset -3px -3px 3px #c6c6c6",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
});
