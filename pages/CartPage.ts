import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }
    
  async open() {
        await this.page.goto("/cart.html");
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}