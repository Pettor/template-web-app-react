// tailwind config is required for editor support
import { join } from "path";
import sharedConfig from "tailwind/tailwind.config.ts";
import { TAILWIND_CONSTANTS_CONTENT_FORMATS } from "tailwind/tailwind.constants.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    join("./src", TAILWIND_CONSTANTS_CONTENT_FORMATS),
    join(require.resolve("shared-ui"), "..", TAILWIND_CONSTANTS_CONTENT_FORMATS),
    join(require.resolve("storybook-base"), "..", TAILWIND_CONSTANTS_CONTENT_FORMATS),
  ],
  presets: [sharedConfig],
};

export default config;
