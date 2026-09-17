const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  // 1. Navegar a la página objetivo
  await page.goto('https://playwright.dev/');

  // 2. Capturar el elemento usando el localizador
  const title = page.locator('.navbar__inner .navbar__title');

  // 3. Realizar la aserción (Validar el texto)
  await expect(title).toHaveText('Playwright');
});
