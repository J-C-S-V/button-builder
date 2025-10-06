import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import App from "./App.tsx";
// import { Test } from "./components/Test.tsx";
import "./App.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </StrictMode>
);
