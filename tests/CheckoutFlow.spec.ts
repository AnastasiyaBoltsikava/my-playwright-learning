import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/users";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { messages } from "../testData/messages";

test.describe("Cart functionality", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );
    });

    test('User can successfully complete checkout flow', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await test.step ('Add a product to the cart', async () => {
            await inventoryPage.addFirstItemToCart();
            await inventoryPage.openCart();
        });
        await test.step("Proceed to checkout", async () => {
            await cartPage.checkout();
        });
        await test.step("Fill in checkout information", async () => {
            await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
        });
        await test.step("Complete checkout and verify success message", async () => {
            await checkoutPage.continueCheckout();
            await expect(checkoutPage.inventoryItemName).toBeVisible();
            await checkoutPage.finishCheckout();
            await expect(page.locator('.complete-header')).toHaveText(messages.successMessage);
        });
    });
});