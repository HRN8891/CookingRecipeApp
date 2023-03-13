import React, {createContext, useState, useContext} from 'react';

type AuthContextData = {
  authData?: AuthData;
  signIn(): Promise<void>;
  signOut(): void;
  guestSignIn(): Promise<void>;
};

type AuthContextProviderData = {
  children: React.ReactNode;
};

type AuthData = {
  token: string;
  email: string;
  name: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthContextProviderData> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();

  const signIn = async () => {
    //call the service passing credential (email and password).
    setAuthData({
      token: 'JWTTokenMock',
      email: 'hiren8891@gmail.com',
      name: 'Hiren Patel',
    });
  };

  const guestSignIn = async () => {
    //call the service passing credential (email and password).
    setAuthData({
      token: 'JWTTokenMock',
      email: 'guest@gmail.com',
      name: 'Guest',
    });
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined);
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, signIn, signOut, guestSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
