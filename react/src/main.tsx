import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { ContextProvider } from "./contexts/ContextProvider.tsx";
import TanstackProvider from "./libs/tanstackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </TanstackProvider>
  </StrictMode>
);
