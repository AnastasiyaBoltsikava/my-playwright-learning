1. Root cause:
Wrong placeholder text was used for the username field.
Fix:
Changed:
getByPlaceholder("User Name")
to:
getByPlaceholder("Username")

How I verified:
I run the test

Observed:
The test passed and opened the "inventory" page successfully.

2. Root cause:
Error message on wrong password.
Fix:
Changed:
toHaveText "Username and password do not match"
to:
"Epic sadface: Username and password do not match any user in this service"

How I verified:
I run the test

Observed:
The test passed and error message is displayed

3. Root cause:
Cart badge appears after adding product
Fix:
Changed:
page.locator("[data-test=\"add-to-cart-sauce-labs-backpack\"]").click()
to:
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

How I verified:
I run the test

Observed:
The test passed