const { chromium } = require("playwright");
const { preview } = require("vite");

const HOST = "127.0.0.1";
const PORT = 4321;

(async () => {
  const server = await preview({
    base: "/proto-parallax/",
    preview: {
      port: PORT,
      host: HOST,
    },
  });

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`http://${HOST}:${PORT}/proto-parallax/`, {
      waitUntil: "networkidle",
    });

    await page.pdf({
      path: "output.pdf",
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    console.log("PDF generated successfully!");
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    server.httpServer.close();
  }
})();
