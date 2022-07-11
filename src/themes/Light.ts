import { createTheme } from "@mui/material";



export const LightTheme = (mainColor:string) => {
  return createTheme({
    palette: {
      primary: {
        main: mainColor,
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
      /* inner-shadow */
      "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
      /* inner-shadow-0 */
      "inset 3px 3px 3px #d0d0d0, inset 3px 3px 3px #f8f8f8",
      /* outer-shadow */
      "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8",
      /* outer-shadow-0 */
      "3px 3px 3px #d0d0d0, 3px 3px 3px #f8f8f8",
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
