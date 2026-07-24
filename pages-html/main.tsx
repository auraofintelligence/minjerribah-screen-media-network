import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app/globals.css";
import { StaticSiteApp } from "../components/StaticSiteApp";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Site root was not found.");
}

const route = root.dataset.route ?? "/";

createRoot(root).render(
  <StrictMode>
    <StaticSiteApp path={route} />
  </StrictMode>,
);
