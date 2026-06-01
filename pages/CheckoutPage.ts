import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipPostalCodeInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder("First Name");
    this.lastNameInput = page.getByPlaceholder("Last Name");
    this.zipPostalCodeInput = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }
    async open() {
    await this.page.goto("/checkout-step-one.html");
  }

    async fillCheckoutInformation(firstName: string, lastName: string, zipPostalCode: string) { 
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipPostalCodeInput.fill(zipPostalCode);
    await this.continueButton.click();
    }
}  