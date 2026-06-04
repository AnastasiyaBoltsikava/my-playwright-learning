import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly itemTitle: Locator;
  readonly cartBadge: Locator;
  readonly checkoutButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemTitle = page.locator(".inventory_item_name");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.removeButton = page.getByRole('button', { name: 'Remove' });
  }
    
  async open() {
        await this.page.goto("/cart.html");
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async removeItem() {
        await this.removeButton.first().click();
    }
}