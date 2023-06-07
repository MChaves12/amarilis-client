import axios from 'axios';

class AmarilisApi {
    constructor(){
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000'
        });
    }
}

signup = async ({username, email, password}) => {
    try {
      const { data } = await this.api.post('/auth/signup', {username, email, password});
      return data;
    } catch (error) {
      throw error;
    }
}

login = async ({username, password}) => {
    try {
      const { data } = await this.api.post('/auth/login', {username, password});
      return data;
    } catch (error) {
      throw error;
    }
}

verify = async (token) => {
    const { data } = await this.api.get('/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data;
}

const amarilisApi = new AmarilisApi();
export default amarilisApi;
