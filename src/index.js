import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';





const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);
