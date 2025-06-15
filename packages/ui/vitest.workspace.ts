import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  // This is the path to your existing Vitest config file
  './vitest.config.ts',
  {
    // This is the path to your existing Vite config file
    extends: './vite.config.ts',
    plugins: [
      storybookTest({
        // The location of your Storybook config, main.js|ts
        configDir: path.join(dirname, '.storybook'),
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'yarn storybook --ci',
      }),
    ],
    test: {
      name: 'storybook',
      // Enable browser mode
      browser: {
        enabled: true,
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
        instances: [{ browser: 'chromium' }],
      },
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);