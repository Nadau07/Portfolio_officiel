import React from "react";
import reportWebVitals from "./reportWebVitals";
import Home from "../src/pages/Home";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
