import "@fontsource/rubik";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/900.css";
import { PaletteMode } from "@mui/material";
import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";

function createAppTheme(mode: PaletteMode = "light"): Theme {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: {
                main: "#CECCCC",
              },
              secondary: {
                main: "#0F110C",
              },
              background: {
                default: "#efeff0",
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: "#CECCCC",
              },
              secondary: {
                main: "#0F110C",
              },
              background: {
                default: "#273238",
              },
            }),
      },
      typography: {
        fontFamily: "Rubik",
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "30px",
            },
          },
        },
      },
    })
  );
}

export default createAppTheme;
