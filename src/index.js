import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import MapContextProvider from "./components/MapContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MapContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MapContextProvider>
);
