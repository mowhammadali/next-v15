import { spawn } from "child_process";
import open from "open";
import waitOn from "wait-on";

const PORT = 4000;
const URL = `http://localhost:${PORT}`;

// Start the Next.js dev server
const dev = spawn("npm", ["run", "next:dev"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    PORT: PORT.toString(),
  },
});

// Wait for the server to be ready, then open the browser
waitOn({ resources: [URL] })
  .then(() => open(URL))
  .catch((err) => {
    console.error("Failed to open browser:", err);
  });
