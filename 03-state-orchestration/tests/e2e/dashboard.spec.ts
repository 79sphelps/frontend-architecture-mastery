import { test, expect } from '@playwright/test'

test('user logs in and sees todos', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Login')
  await expect(page.locator('text=Welcome')).toBeVisible()
})