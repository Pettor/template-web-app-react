import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "src",
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
      use: { browserName: "chromium", ignoreHTTPSErrors: true },
      testMatch: "**/*.spec.ts",
    },
  ],
  reporter: [["list"], ["json", { outputFile: "./test-results/test-results.json" }]],
});
