// e2e/example.spec.ts

import { test, expect } from '@playwright/test'

test('should navigate to the contact page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Contact Page' and click on it
  await page.click('text=Contact us')
  // The new url should be "/Contact" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/contact')
  // The new page should contain an h1 with "Contact Page"
  await expect(page.locator('h1')).toContainText('Contact Page')
})