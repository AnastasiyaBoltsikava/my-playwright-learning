import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutInformationPage } from "../pages/CheckoutInformationPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverwiewPage";
import { messages } from "../testData/messages";
import { loginAsStandardUser } from "../utils/loginHelper";

test.describe("Cart functionality", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsStandardUser(page);
    });

    test('User can successfully complete checkout flow', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutInformationPage = new CheckoutInformationPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);

        await test.step ('Add a product to the cart', async () => {
            await inventoryPage.addFirstItemToCart();
            await inventoryPage.openCart();
        });
        await test.step("Proceed to checkout", async () => {
            await cartPage.checkout();
        });
        await test.step("Fill in checkout information", async () => {
            await checkoutInformationPage.fillCheckoutInformation('John', 'Doe', '12345');
        });
        await test.step("Complete checkout and verify success message", async () => {
            await checkoutInformationPage.continueCheckout();
            await expect(checkoutInformationPage.inventoryItemName).toBeVisible();
            await checkoutOverviewPage.finishCheckout();
            await expect(page.locator('.complete-header')).toHaveText(messages.successMessage);
        });
    });
});