const { chromium, devices } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const file = "file://" + path.resolve(__dirname, "index.html").replace(/\\/g, "/");
  await page.goto(file, { waitUntil: "networkidle" });

  // 整页截图
  await page.screenshot({ path: "mobile-full.png", fullPage: true });
  // 首屏截图
  await page.screenshot({ path: "mobile-hero.png" });

  // 检查横向溢出
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log("horizontal overflow:", overflow);
  console.log("scrollWidth:", await page.evaluate(() => document.documentElement.scrollWidth));

  await browser.close();
})();
