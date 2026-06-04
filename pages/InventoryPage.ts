import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly itemTitle: Locator;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemTitle = page.locator(".inventory_item_name");
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.cartButton = page.locator(".shopping_cart_link");
  }
    async open() {
    await this.page.goto("/inventory.html");
  }
    async addFirstItemToCart() {
    await this.addToCartButton.first().click();
  }
    async addSecondItemToCart() {
    await this.addToCartButton.nth(1).click();
  }
    async openCart() {
    await this.cartButton.click();
  }
}
