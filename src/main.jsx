import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import CharacterProvider from "./context/CharacterContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
);
