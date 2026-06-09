import { type Locator, type Page } from "@playwright/test";

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly inventoryItemName: Locator;

    constructor(page: Page) {
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.inventoryItemName = page.locator(".inventory_item_name");
    }

    async open() {
        await this.page.goto("/checkout-step-two.html");
    }
    async finishCheckout() {
        await this.finishButton.click();
    }
}  
