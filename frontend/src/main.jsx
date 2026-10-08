import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { StrapiProvider } from "./context/StrapiContext.jsx";
import { router } from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StrapiProvider>
      <RouterProvider router={router} />
    </StrapiProvider>
  </StrictMode>,
);
