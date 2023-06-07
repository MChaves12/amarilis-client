export const storeToke = (token) => {
    localStorage('authToken', token);
  };

  export const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  