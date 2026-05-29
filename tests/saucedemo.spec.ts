//1 line I updated I need conflict
import { test, expect } from '@playwright/test';

test.describe('SauceDemo login (positive)', () => {
    test('Login-happy path', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page, 'Should redirect to inventory page').toHaveURL(/inventory/);
    });
});
test.describe('SauceDemo Login (negative)', () => {
    test('wrong password', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('wrong_password');

await page.getByRole('button', { name: 'Login' }).click();

// 4. verify error message
await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});
    test('Click the Login button without entering credentials', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.getByRole('button', { name: 'Login' }).click();
await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});
    test('Click the Login button without entering password', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});
    test('Click the Login button without entering username', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});
    test('Log in with locked_out_user', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
    });
});
test.describe('SauceDemo Cart functionality', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);
  });
        
// TASK 3 
// Add product to cart

test('Add product to cart', async ({ page }) => {

  // 5. add product to cart
  await page.getByText('Sauce Labs Backpack').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

    // 6. verify cart badge with number 1
await expect(page.locator(".shopping_cart_badge"),'Cart badge should show 1 item').toHaveText("1");
});

// TASK 4 
// Add product to cart and remove it

test('Add product to cart and remove it', async ({ page }) => {

  // 5. add product to cart
  await page.getByText('Sauce Labs Bike Light').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

    // 6. verify cart badge with number 1
    await expect(
  page.locator(".shopping_cart_badge"),"Cart badge should show 1 item").toHaveText("1");
    // 7. remove product from cart
    await page.getByRole('button', { name: 'Remove' }).click();
    
    // 8. verify cart badge is not visible
    await expect(page.locator(".shopping_cart_badge"),"Cart badge should not be visible after removing product").not.toBeVisible();
});

// BONUS 8: Multiple products. Add 3 products to the cart, verify the badge shows “3”, then remove one and verify it shows “2”.

test('Add multiple products to cart and remove them', async ({ page }) => {

  // 5. add 3 products to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(page.locator(".shopping_cart_badge"),'Cart badge should show 1 item').toHaveText("1");
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await expect(page.locator(".shopping_cart_badge"),'Cart badge should show 2 items').toHaveText("2");
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator(".shopping_cart_badge"),'Cart badge should show 3 items').toHaveText("3");

  // 6. remove one product from cart
   await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
   
  // 7. verify cart badge shows 2
  await expect(page.locator(".shopping_cart_badge"),'Cart badge should show 2 items').toHaveText("2");
});

// BONUS 9: Sorting. Change the product sort order
test('Change product sort order', async ({ page }) => {

  // 5. change sort order to "Price (low to high)"
  await page.locator('[data-test="product-sort-container"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption("Price (low to high)");

  // 6. verify first product is the cheapest one
  const firstProductPrice = await page.locator('.inventory_item_price').first().textContent();
  expect(firstProductPrice).toBe('$7.99');
});

// BONUS 10 State after refresh. Add a product, refresh the page. 

test('State after refresh', async ({ page }) => {

    // 5. add product to cart and check
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 6. refresh the page
    await page.reload();
    // 7. verify cart badge with number 1 is still visible after refresh
    await expect(page.locator(".shopping_cart_badge"),"Cart badge should still show 1 after refresh").toHaveText("1");
 });

// BONUS 11 I need check changes in branch

test('Re-test State after refresh check new branch', async ({ page }) => {

    // 5. add product to cart and check
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    // 6. refresh the page
    await page.reload();

    // 7. verify cart badge with number 1 is still visible after refresh
    await expect(page.locator(".shopping_cart_badge"),"Cart badge should still show 1 after refresh").toHaveText("1");
});
test('Re-test State after refresh check VS Code Git workflow', async ({ page }) => {

    // 5. add product to cart and check
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // 6. refresh the page
    await page.reload();

    // 7. verify cart badge with number 1 is still visible after refresh
    await expect(page.locator(".shopping_cart_badge"),"Cart badge should still show 1 after refresh").toHaveText("1");
 });
});