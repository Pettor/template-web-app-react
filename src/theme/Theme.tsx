import "@fontsource/rubik";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/900.css";
import { PaletteMode } from "@mui/material";
import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customBackgrounds: {
      gradients: {
        linear: {
          variation1: string;
        };
      };
    };
    borderRadius: {
      default: string;
      md: string;
      lg: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customBackgrounds?: {
      gradients?: {
        linear?: {
          variation1?: string;
        };
      };
    };
    borderRadius?: {
      default: string;
      md: string;
      lg: string;
    };
  }
}

const DEFAULT_BORDER_RADIUS = "4px";

export default function createAppTheme(mode: PaletteMode = "light"): Theme {
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
      borderRadius: {
        default: DEFAULT_BORDER_RADIUS,
        md: "8px",
        lg: "12px",
      },
      customBackgrounds: {
        gradients: {
          linear: {
            variation1: "linear-gradient(120deg, #bd34fe 30%, #41d1ff)",
          },
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
              boxShadow: "none",
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: DEFAULT_BORDER_RADIUS,
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
