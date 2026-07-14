const { chromium } = require("playwright");
const { spawn } = require("node:child_process");
const net = require("node:net");

const HOST = "127.0.0.1";
const PORT = 4321;

const waitForServer = (host, port, timeoutMs = 15000) =>
  new Promise((resolve, reject) => {
    const start = Date.now();

    const tryConnect = () => {
      const socket = net.createConnection({ host, port });

      socket.once("connect", () => {
        socket.end();
        resolve();
      });

      socket.once("error", () => {
        socket.destroy();
        if (Date.now() - start >= timeoutMs) {
          reject(new Error(`Timed out waiting for server on ${host}:${port}`));
          return;
        }
        setTimeout(tryConnect, 250);
      });
    };

    tryConnect();
  });

(async () => {
  const previewProcess = spawn(
    "npx",
    ["astro", "preview", "--host", HOST, "--port", String(PORT)],
    { stdio: "inherit", shell: process.platform === "win32" },
  );

  try {
    await waitForServer(HOST, PORT);

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
  } finally {
    previewProcess.kill("SIGTERM");
  }
})();
