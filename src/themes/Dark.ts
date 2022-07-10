import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#3b39ae",
      contrastText: "#ffffff",
    },
    action:{
      active: '#fff',
      disabled: '#000'
    },
    background: {
      paper: "#353535",
      default: "#2d2c2f",
    },
    grey: {
      "600": "#161616",
      "900": "#101010",
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
    /* inner-shadow */
    "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636",
    /* inner-shadow-0 */
    "inset 3px 3px 3px #222327, inset 3px 3px 3px #363636",
    /* outer-shadow */
    "3px 3px 3px #222327, -3px -3px 3px #363636",
    /* outer-shadow-0 */
    "3px 3px 3px #222327, 3px 3px 3px #363636",
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
