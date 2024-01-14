import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import MapContextProvider from "./context/MapContext";
import AgentContextProvider from "./context/AgentContext";
import MainContextProvider from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <AgentContextProvider>
      <MapContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MapContextProvider>
    </AgentContextProvider>
  </MainContextProvider>
);
