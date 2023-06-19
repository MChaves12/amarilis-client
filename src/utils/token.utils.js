export const storeToke = (token) => {
    localStorage('token', token);
  };

  export const removeToken = () => {
    localStorage.removeItem('token');
  };

  export const getToken = () => {
    return localStorage.getItem('token');
  };
  