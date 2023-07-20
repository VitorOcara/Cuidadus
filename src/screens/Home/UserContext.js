import React, { createContext, useContext, useState } from 'react';

// Crie o contexto do usuário
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(null);

  return (
    <UserContext.Provider value={[ userName, setUserName, userImage, setUserImage ]}>
      {children}
    </UserContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }
  return context;
};