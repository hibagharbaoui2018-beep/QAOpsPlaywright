const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {
    test('Navigate to VS Code homepage and handle cookie banner', async ({ page }) => {
        // Navigate to the VS Code homepage
        await page.goto('https://code.visualstudio.com');

        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');

        // Check if a cookie banner is present and decline it if found
        // Common selectors for cookie banners (may vary)
        const cookieSelectors = [
            'button:has-text("Decline")',
            'button:has-text("Reject")',
            'button:has-text("Deny")',
            '[data-testid="cookie-decline"]',
            '.cookie-banner button:has-text("Decline")',
            '.gdpr-banner button:has-text("Decline")'
        ];

        let cookieBannerDeclined = false;
        for (const selector of cookieSelectors) {
            try {
                const button = page.locator(selector).first();
                if (await button.isVisible({ timeout: 2000 })) {
                    await button.click();
                    console.log('Cookie banner declined using selector:', selector);
                    cookieBannerDeclined = true;
                    break;
                }
            } catch (error) {
                // Selector not found or not visible, continue to next
                continue;
            }
        }

        if (!cookieBannerDeclined) {
            console.log('No cookie banner found or already handled');
        }

        // Verify the page has loaded correctly
        await expect(page).toHaveTitle(/Visual Studio Code/);

        // Verify main content is visible
        const mainHeading = page.locator('h1:has-text("The open source AI code editor")');
        await expect(mainHeading).toBeVisible();

        // Take a screenshot for verification
        await page.screenshot({ path: 'vscode-homepage.png', fullPage: true });

        console.log('Navigation test completed successfully');
    });
});