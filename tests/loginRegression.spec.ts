import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/users";
import { errorMessages } from "../testData/errorMessages";

test("StandardUser can log in", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});

test("lockedUser can't log in", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    users.lockedUser.username,
    users.lockedUser.password
  );

  await expect(page.locator('[data-test="error"]')).toContainText(errorMessages.lockedUser);
});

test("User login with wrong password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password + "_wrong"
  );
  await expect(page.locator('[data-test="error"]')).toContainText(errorMessages.wrongPassword);
});

test("User login with empty username", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    "",
    users.standardUser.password
  );
  await expect(page.locator('[data-test="error"]')).toContainText(errorMessages.emptyUsername);
});