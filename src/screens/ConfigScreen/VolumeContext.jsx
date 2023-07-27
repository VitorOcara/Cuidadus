import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [volume, setVolume] = useState(0.5);
  const [sfx, setSfx] = useState(0.5);

  return (
    <AppContext.Provider value={{ volume, setVolume, sfx, setSfx }}>
      {children}
    </AppContext.Provider>
  );
};