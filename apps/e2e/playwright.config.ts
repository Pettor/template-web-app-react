import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "src",
  workers: 5,
  retries: 1,
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    baseURL: "https://localhost:5173",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "webKit",
      use: { browserName: "webkit" },
    },
    {
      name: "mobile-chromium",
      use: devices["Pixel 5"],
    },
    {
      name: "mobile-webkit",
      use: devices["iPhone 13"],
    },
  ],
};

export default config;
