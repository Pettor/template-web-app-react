import { test, expect } from "@playwright/test";
import { mocksClient } from "mocks-package";

test.describe("auth.loggedin", () => {
  test.beforeEach(async () => {
    await mocksClient.useRouteVariant("Tokens_Refresh:400-json-status-400-no-error");
  });

  test("do login attempt", async ({ page }) => {
    await page.goto("/");

    await expect(async () => {
      expect(await page.title()).toBe("Login");
    }).toPass();

    await page.getByTestId("login-form__email-input").fill("root@admin.com");
    await page.getByTestId("login-form__password-input").fill("pass");
    await page.getByTestId("login-form__submit-button").click();

    await expect(async () => {
      expect(await page.title()).toBe("Home");
    }).toPass();
  });
});

test.describe("auth.refreshtoken", () => {
  test.beforeEach(async () => {
    await mocksClient.restoreRouteVariants();
  });

  test("do refresh", async ({ page }) => {
    await page.goto("/");

    await expect(async () => {
      expect(await page.title()).toBe("Home");
    }).toPass();
  });
});

test.describe("auth.logout", () => {
  test.beforeEach(async () => {
    await mocksClient.restoreRouteVariants();
  });

  test("do logout attempt", async ({ page }) => {
    await page.goto("/");

    await expect(async () => {
      expect(await page.title()).toBe("Home");
    }).toPass();

    await page.getByTestId("home-page__menu-button").click();
    await page.getByTestId("profile-card__logout-button").click();

    await expect(async () => {
      expect(await page.title()).toBe("Login");
    }).toPass();
  });
});
