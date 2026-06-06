import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/users";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test.describe("Cart functionality", () => {
  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );
  });

test('Cart badge shows correct count after adding a product', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.cartBadge).toHaveText("1");
});

test('Cart page shows the name of the selected product', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.openCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.itemTitle).toBeVisible();
});

test('Removing a product updates the cart (badge disappears or decrements)', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.addSecondItemToCart();
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await expect(cartPage.cartBadge).toHaveText("2");
    await cartPage.removeItem();
    await expect(cartPage.cartBadge).toHaveText("1");
    await cartPage.removeItem();
    await expect(cartPage.cartBadge).not.toBeVisible();
});

test('Adding multiple products shows correct badge count', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.addSecondItemToCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.cartBadge).toHaveText("2");
    });
});