import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import MapContextProvider from "./components/MapContext";
import AgentContextProvider from "./components/AgentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AgentContextProvider>
    <MapContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MapContextProvider>
  </AgentContextProvider>
);
