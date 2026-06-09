import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/users";

export async function loginAsStandardUser(page: Page) {

  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

}