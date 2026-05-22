import { test, expect } from '@playwright/test';

test('Onliner homepage opens', async ({ page }) => {
  await page.goto('https://www.onliner.by/');
  await page.getByRole('link', { name: 'Каталог', exact: true }).click();
  await page.getByRole('link', { name: '‹ Автобарахолка' }).click();
  await page.goto('https://ab.onliner.by/');
  await page.getByRole('link', { name: '‹ Автобарахолка' }).click();
  await page.getByRole('link', { name: 'Мото' }).click();
  await page.getByRole('link', { name: 'Мои объявления' }).click();
});