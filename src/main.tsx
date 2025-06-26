import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./app/app-provider";
import { worker } from "./mocks";

console.log("## mocks is not running ##", import.meta.env.VITE_ENVIRONMENT);

if (import.meta.env.VITE_ENVIRONMENT === "DEVELOPMENT") {
  console.log("## mocks is running ##");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
