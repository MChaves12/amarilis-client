import { createContext, useEffect, useState, useCallback } from 'react';
import amarilisApi from '../api/amarilis.api';
import * as utils from '../utils/token.utils';

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const authenticateUser = useCallback(async () => { 
    const storedToken = utils.getToken();
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
            utils.removeToken();
            setIsLoggedIn(false);
            setUser(null);
        } finally {  
            setIsLoading(false);
        }
    }, [])

    const logOutUser = () => {
        utils.removeToken();
        authenticateUser();
    }
    
    useEffect(() => {
        authenticateUser();
    }, [authenticateUser]);

    return ( 
    <AuthContext.Provider value={{isLoggedIn, isLoading, user, authenticateUser, logOutUser}}>
      {children}
    </AuthContext.Provider>
  )
};

export { AuthContext, AuthProviderWrapper };
