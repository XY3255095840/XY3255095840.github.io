const assert = require('node:assert/strict');
const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({
    executablePath: process.env.TEST_BROWSER_PATH,
    headless: true,
  });
  try {
    for (const width of [1280, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(process.env.TEST_URL || 'http://127.0.0.1:1314/');
      const experience = page.getByRole('heading', { name: 'Experience', exact: true }).locator('..');
      const education = page.getByRole('heading', { name: 'Education', exact: true }).locator('..');
      assert.equal(await experience.locator('h3:visible').count(), 1, 'Initially show only one experience');
      assert.equal(await experience.locator('h3:visible').first().textContent().then(text => text.trim()), 'Visiting Student');
      assert.equal(await education.locator('h3:visible').count(), 1);
      const toggle = experience.locator('summary');
      await toggle.click();
      assert.equal(await experience.locator('h3:visible').count(), 5, 'Expand all five experiences');
      assert.equal(await education.locator('h3:visible').count(), 1);
      await toggle.focus();
      await page.keyboard.press('Space');
      assert.equal(await experience.locator('h3:visible').count(), 1, 'Keyboard collapse restores the first entry');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, 'No horizontal overflow');
      console.log(`Experience checks passed at ${width}px`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
