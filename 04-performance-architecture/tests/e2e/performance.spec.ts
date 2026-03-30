import { test, expect } from '@playwright/test'

// test('full lab navigation', async ({ page }) => {
//   await page.goto('/')

//   const labs = [
//     'Rendering',
//     'Memoization',
//     'Computation',
//     'Network',
//     'Images (LCP)',
//     'Fonts (FCP)',
//     'Code Splitting',
//     'Deferred JS',
//   ]

//   for (const lab of labs) {
//     await page.getByRole('button', { name: lab }).click()
//     await expect(page.getByRole('heading', { level: 2 })).toBeVisible()
//   }
// })

test('full lab navigation', async ({ page }) => {
  await page.goto('/')

  const labs = [
    'Rendering',
    'Memoization',
    'Computation',
    'Network',
    'Images (LCP)',
    'Fonts (FCP)',
    'Code Splitting',
    'Deferred JS',
  ]

  for (const lab of labs) {
    await page.getByRole('button', { name: lab }).click()

    // Assert lab container exists instead
    await expect(
      page.getByTestId('lab-unoptimized')
    ).toBeVisible()

    await expect(
      page.getByTestId('lab-optimized')
    ).toBeVisible()
  }
})

// test('rendering lab shows interaction', async ({ page }) => {
//   await page.goto('/')
//   await page.getByRole('button', { name: 'Rendering' }).click()

//   const buttons = page.getByRole('button', { name: 'Trigger Re-render' })

//   await buttons.first().click()

//   await expect(page.getByText(/Renders:/)).toBeVisible()
// })

test('rendering lab shows interaction', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Rendering' }).click()

  const panel = page.getByTestId('lab-unoptimized')

  await panel
    .getByRole('button', { name: 'Trigger Re-render' })
    .click()

  await expect(
    panel.getByText(/Renders:/)
  ).toBeVisible()
})

// test('computation lab runs and updates time', async ({ page }) => {
//   await page.goto('/')
//   await page.getByRole('button', { name: 'Computation' }).click()

//   const btn = page.getByRole('button', { name: 'Run Computation' }).first()

//   await btn.click()

//   await expect(page.getByText(/ms/)).toBeVisible()
// })

test('computation lab runs and updates time', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Computation' }).click()

  const panel = page.getByTestId('lab-unoptimized')

  await panel
    .getByRole('button', { name: 'Run Computation' })
    .click()

  await expect(
    panel.getByText(/ms/)
  ).toBeVisible()
})

test('network lab shows cache improvement', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Network' }).click()

  const btn = page.getByRole('button', { name: 'Fetch Data' }).nth(1)

  await btn.click()
  await page.waitForTimeout(1200)

  await btn.click()

  await expect(page.getByText(/HIT/)).toBeVisible()
})

test('font lab renders text', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Fonts (FCP)' }).click()

  const btn = page.getByRole('button', { name: 'Render Text' })

  await btn.click()

  await expect(page.getByText(/Text rendered/)).toBeVisible()
})

test('code splitting loads component lazily', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Code Splitting' }).click()

  await page.getByRole('button', { name: 'Load Component' }).click()

  await expect(page.getByText(/Loading chunk/)).toBeVisible()
})

// test('deferred js does not block UI immediately', async ({ page }) => {
//   await page.goto('/')
//   await page.getByRole('button', { name: 'Deferred JS' }).click()

//   const btn = page.getByRole('button', { name: 'Run Deferred JS' })

//   await btn.click()

//   await expect(page.getByText(/Status/)).toBeVisible()
// })

test('deferred js does not block UI immediately', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Deferred JS' }).click()

  const panel = page.getByTestId('lab-unoptimized')

  await panel
    .getByRole('button', { name: 'Run Deferred JS' })
    .click()

  await expect(
    panel.getByRole('status')
  ).toBeVisible()
})