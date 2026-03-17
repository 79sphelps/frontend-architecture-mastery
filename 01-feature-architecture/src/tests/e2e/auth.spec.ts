import { test, expect } from '@playwright/test'

test('user loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Steve')).toBeVisible()
})