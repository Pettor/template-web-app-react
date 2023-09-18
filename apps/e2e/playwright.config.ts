import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "src",
  workers: 5,
  retries: 1,
  use: {
    baseURL: "https://localhost:5173",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
      testMatch: "**/*.spec.ts",
    },
  ],
});
