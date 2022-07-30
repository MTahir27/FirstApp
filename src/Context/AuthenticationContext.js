import React, {createContext, useState} from 'react';
export const AuthenticationContext = createContext();

export default function AuthenticationContextProvider(props) {
  const [isAuthenticationed, setIsAuthenticated] = useState(false);
  return (
    <AuthenticationContext.Provider
      value={{isAuthenticationed, setIsAuthenticated}}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
