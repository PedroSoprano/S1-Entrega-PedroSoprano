import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultsProviders } from "./providers/resultsProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultsProviders>
      <App />
    </ResultsProviders>
  </React.StrictMode>
);
