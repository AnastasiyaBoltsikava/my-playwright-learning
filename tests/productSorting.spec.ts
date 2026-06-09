import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { loginAsStandardUser } from "../utils/loginHelper";

test.describe("Product sorting", () => {
  test.beforeEach(async ({ page }) => {
  await loginAsStandardUser(page);
});

test('Sort products (Low to high) ', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProductsLowToHigh();
    });
});