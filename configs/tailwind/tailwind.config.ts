import { join } from "path";
import { TAILWIND_CONSTANTS_CONTENT_FORMATS } from "./tailwind.constants";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    join("./src", TAILWIND_CONSTANTS_CONTENT_FORMATS),
    join(require.resolve("storybook-base"), "..", TAILWIND_CONSTANTS_CONTENT_FORMATS),
  ],
  darkMode: ["class"],
  daisyui: {
    darkTheme: "dark",
    logs: false,
    themes: ["light", "dark"],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Rubik"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
