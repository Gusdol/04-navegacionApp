import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// definir como luce, que informacion vamos a tener aca
export interface AuthState {
  isLoggedIn: boolean;
  logout: boolean;
  username?: string;
  favoriteIcon?: string;
}

// se necesita el estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  logout: false,
  // si son opcionales no hace falta poner
  username: undefined,
  favoriteIcon: undefined,
};

// definir todo el contexto que va a proporcionar a los hijos
// lo usamos para decirle a react como luce y que va a mostrar el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeUserName: (name: string) => void;
  changeFavoriteIcon: (iconName: string) => void;
}

// creando el context
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor del estado hight order component
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  const changeUserName = (name: string) => {
    dispatch({
      type: 'changeName',
      payload: name,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeFavoriteIcon,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
