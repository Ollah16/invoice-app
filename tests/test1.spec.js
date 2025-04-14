import { test, expect } from '@playwright/test';

const ITEMS_DATA = [
    {
        description: 'SOfa',
        quantity: 100,
        rate: 200
    }
]

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})


test.describe('Invoice Page', () => {

    test('shows error message when "Who is the invoice from?" is blurred and left empty', async ({ page }) => {

        // Locate the input by placeholder or aria-label (update if needed)
        const whoIsFromInput = page.getByPlaceholder('Who is the invoice from? (required)');

        // Trigger blur without entering any text
        await whoIsFromInput.focus();
        await whoIsFromInput.evaluate(input => input.blur());

        // Check for the error message
        await expect(page.getByRole('alert')).toContainText('Please enter the name of who the invoice is from.');
    });

    test('Removes error on value input', async ({ page }) => {

        const whoIsFromInput = page.getByPlaceholder('Who is the invoice from? (required)');

        await whoIsFromInput.click();
        await whoIsFromInput.blur();
        await whoIsFromInput.fill('Hello world')

        await expect(page.getByRole("alert")).not.toBeVisible();

    })

    test('Line One inputs should show a value when inserted', async ({ page }) => {

        const descriptionInput = page.getByLabel('Item Description');
        const quantityInput = page.getByLabel('Item Quantity');
        const rateInput = page.getByLabel('Item Rate');

        await descriptionInput.click();
        await descriptionInput.fill('Sofa');

        await quantityInput.click();
        await quantityInput.fill("200");

        await rateInput.click();
        await rateInput.fill("200")

        await expect(descriptionInput).toHaveValue('Sofa');
        await expect(quantityInput).toHaveValue("200");
        await expect(rateInput).toHaveValue("200");

    })

    test('Capture test', async ({ page }) => {
        await page.locator('.footer-container').screenshot({ path: './screenshots/footer.png' })
    })

})
