import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipPostalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly inventoryItemName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.zipPostalCodeInput = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.inventoryItemName = page.locator(".inventory_item_name");
  }
    async open() {
    await this.page.goto("/checkout-step-one.html");
  }

    async fillCheckoutInformation(firstName: string, lastName: string, zipPostalCode: string) { 
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipPostalCodeInput.fill(zipPostalCode);
    }

    async continueCheckout() {
    await this.continueButton.click();
    }

    async finishCheckout() {
    await this.finishButton.click();
    }
}  