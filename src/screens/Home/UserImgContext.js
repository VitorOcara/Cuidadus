import React, { createContext, useContext, useState } from 'react';

// Crie o contexto do usuário
const ImgContext = createContext();

export const ImgProvider = ({ children }) => {
  const [userImage, setUserImage] = useState(null);

  return (
    <ImgContext.Provider value={[ userImage, setUserImage ]}>
      {children}
    </ImgContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useImgContext = () => {
  const context = useContext(ImgContext);
  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }
  return context;
};