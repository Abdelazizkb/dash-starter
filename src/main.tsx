import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./app/app-provider";
import { worker } from "./mocks";

if (import.meta.env.VITE_ENVIRONMENT === "DEVELOPMENT") {
  worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
