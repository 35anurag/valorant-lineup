import React, { useState, createContext } from "react";

export const mainContext = createContext();

const MainContextProvider = ({ children }) => {

  const [mapImg, setMapImg] = useState(null);
  const [mapId, setMapId] = useState(null);
  

  return (
    <mainContext.Provider value={{ mapId, setMapId, mapImg, setMapImg }}>{children}</mainContext.Provider>
  );
};

export default MainContextProvider;
