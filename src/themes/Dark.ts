import { createTheme } from "@mui/material";


export const DarkTheme = (name: any) => {
  return createTheme({
    palette: {
      primary: {
        contrastText: "#ffffff",
        main: name,
      },
      action: {
        active: "#fff",
        disabled: "#000",
      },
      background: {
        paper: "#353535",
        default: "#2d2c2f",
      },
      grey: {
        "100": '#BBBBBB',
        "600": "#161616",
        "900": "#101010",
      },
      text: {
        /* title */
        primary: "#ffffff",
        /* Subtitle */
        secondary: "#666666",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1100,
        xl: 1536,
      },
    },
    shadows: [
      "none",
      /* inner-shadow */
      "inset 3px 3px 3px #222327, inset -3px -3px 3px #363636",
      /* inner-shadow-0 */
      "inset 3px 3px 3px #222327, inset 3px 3px 3px #222327",
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
};
