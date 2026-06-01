Final Project — Playwright Test Suite

## Test target
SauceDemo (https://www.saucedemo.com)

## Covered user journey
Login → product selection → cart → checkout

## Test cases
- Valid user can log in
- Locked user cannot log in
- User can add product to cart
- User can remove product from cart
- User can sort products by price
- User can complete checkout and see success message

## Project structure
- `pages/` — Page Object classes (LoginPage, InventoryPage, CartPage, CheckoutPage)
- `tests/` — test specs (*.spec.ts)
- `test-data/` — credentials and test inputs
- `playwright.config.ts` — configuration

## How to run

npm install                                     Installs project packages
npx playwright test	                            Run ALL tests across ALL configured browsers (headless)
npx playwright test --ui	                    Open UI Mode — best for local dev
npx playwright test --headed                   	Show the browser window while tests run
npx playwright test --project=chromium	        Run only on Chromium (skips Firefox/WebKit — faster)
npx playwright test login.spec.ts	            Run only tests in this file
npx playwright test -g "_____"	                Run only tests whose name matches "______"
npx playwright show-report	                    Open the last HTML report in a browser
npx playwright install	                        Download browsers (Chromium/Firefox/WebKit) — one-time
npx playwright test --trace on                  Runs tests and records a detailed trace of everything
npx playwright show-trace                       Opens a visual tool to view and debug that recorded trace
npx playwright test --repeat-each=3             Run all tests 3 time.
npx playwright test tests/login.spec.ts --debug Step through line by line

## Notes
- No hard waits (`waitForTimeout`) are used
- Tests use semantic locators (`getByRole`, `getByTestId`, `getByPlaceholder`)
- Test data is stored separately from test logic

## Known limitations
- This suite covers only the selected user journey
- It does not cover all possible edge cases