import { PaletteColor, PaletteColorOptions } from "@mui/material";
import { CSSProperties } from 'react';

declare module "@mui/material/styles" {
  interface Theme {
    customBackgrounds: {
      accent: {
        light: string;
        main: string;
        dark: string;
      };
      common: {
        transparent: string;
      };
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
      accent: {
        light: string;
        main: string;
        dark: string;
      };
      common?: {
        transparent?: string;
      };
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