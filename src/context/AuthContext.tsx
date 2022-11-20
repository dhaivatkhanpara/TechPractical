import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean)=> void
};

export const AuthContext = React.createContext<
  AuthContextType | undefined
>(undefined);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({children}: Props) => {

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);


  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
