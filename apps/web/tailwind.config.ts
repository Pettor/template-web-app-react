// tailwind config is required for editor support
import { join } from "path";
import sharedConfig from "tailwind-config/tailwind.config.ts";
import { TAILWIND_CONSTANTS_CONTENT_FORMATS } from "tailwind-config/tailwind.constants.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    join("./src", TAILWIND_CONSTANTS_CONTENT_FORMATS),
    join(require.resolve("ui-package"), "..", TAILWIND_CONSTANTS_CONTENT_FORMATS),
    join(require.resolve("storybook-package"), "..", TAILWIND_CONSTANTS_CONTENT_FORMATS),
  ],
  presets: [sharedConfig],
};

export default config;
