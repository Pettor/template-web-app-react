import { getJestConfig } from "@storybook/test-runner";

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
export default {
  ...getJestConfig(),
  filter: "./.storybook/test-runner-filter.js",
};