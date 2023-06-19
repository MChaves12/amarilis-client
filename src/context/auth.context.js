import { createContext, useEffect, useState, useCallback } from 'react';
import amarilisApi from '../api/amarilis.api';

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('token', token)
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const removeToken = () => {
    localStorage.getItem('token');
  };

  const authenticateUser = useCallback(async () => { 
    const storedToken = getToken();
    setIsLoading(true);

    if(!storedToken) {
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
      return;
    }
  
    try {
        if (storedToken) {
            const response = await amarilisApi.verify(storedToken);
            setIsLoggedIn(true);
            setUser(response);
        } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
            removeToken();
            setIsLoggedIn(false);
            setUser(null);
        } finally {  
            setIsLoading(false);
        }
    }, [])

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }
    
    useEffect(() => {
        authenticateUser();
    }, [authenticateUser]);

    return ( 
    <AuthContext.Provider value={{isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export { AuthContext, AuthProviderWrapper };
