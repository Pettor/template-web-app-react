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
        normal: "400",
        medium: "500",
        bold: "600",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
