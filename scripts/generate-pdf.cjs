const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:4321", { waitUntil: "networkidle" });

  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
  console.log("PDF generated successfully!");
})();
