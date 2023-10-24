import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import "./i18n";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../src/assets/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>
);
