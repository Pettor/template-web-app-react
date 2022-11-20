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
                main: "#ea005e",
              },
              secondary: {
                main: "#1b2027",
              },
              background: {
                default: "#ffffff",
                paper: "#f9f9f9",
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: "#fc3384",
              },
              secondary: {
                main: "#e3e5e9",
              },
              background: {
                default: "#181c23",
                paper: "#2f2f2f",
              },
            }),
      },
      typography: {
        fontFamily: "Rubik",

        h1: {
          fontWeight: "500",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              minHeight: "42px",
              borderRadius: "4px",
              boxShadow: "none",

              "&:hover": {
                boxShadow: "none",
              },
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              opacity: 0.7,
              backdropFilter: "saturate(50%) blur(8px);",
              boxShadow: "none",
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: "4px",
              transition: "all 5s ease-out",

              "& .MuiOutlinedInput-notchedOutline": {
                transition: "all 0.1s ease-out",
              },
            },
          },
        },
      },
    })
  );
}

export default createAppTheme;
