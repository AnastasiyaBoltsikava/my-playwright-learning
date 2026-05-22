import { test, expect } from '@playwright/test';

test('Onliner homepage opens', async ({ page }) => {
  await page.goto('https://www.onliner.by/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://www.onliner.by/');

 // Click the "Автобарахолка" link.
  page.getByRole('link', { name: 'Автобарахолка', exact: true }).click();

  // Expects page to have a heading with the name of Автобарахолка.
  await expect(page.getByRole('heading', { name: 'Автобарахолка' })).toBeVisible();

// Click the "Разместить объявление" link.
  await page.getByText('Разместить объявление').first().click();

 // Click the "Войти" link.
  page.getByRole('button', { name: 'Войти' }).click();
});


// Enter email and password, click the "Войти" button, and expect to see the error message "Неверный логин или пароль".