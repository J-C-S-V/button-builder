import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";
import App from "./App.tsx";
import GlobalProvider from "./context/GlobalContext.tsx";
// import { Test } from "./components/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
