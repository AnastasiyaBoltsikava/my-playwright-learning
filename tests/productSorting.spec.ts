import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/users";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Product sorting", () => {
  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );
  });

test('Sort products (Low to high) ', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProductsLowToHigh();
    });
});