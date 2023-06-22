import axios from "axios";
import * as utils from '../utils/token.utils';

class AmarilisApi {
  constructor() {
    this.api = axios.create({
      baseURL:  process.env.REACT_APP_API_URL || "http://localhost:5000",
    });
    this.api.interceptors.request.use((req) => {
      const storedToken = utils.getToken()

      if(storedToken) {
        req.headers.Authorization = 'Bearer ' + storedToken;
      } 

      return req;
    })
  }

  signup = async ({ username, email, password }) => {
    try {
      const { data } = await this.api.post("/auth/signup", {
        username,
        email,
        password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  login = async ({ username, password }) => {
    try {
      const { data } = await this.api.post("/auth/login", {
        username,
        password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  verify = async () => {
    const { data } = await this.api.get("/auth/verify"); 
    return data;
  };

  addProduct = async (product) => {
    try {
      const { data } = await this.api.post('/products', product);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getProduct = async (productId) => {
    try {
      const { data } = await this.api.get(`/products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  addProductToCategory = async (categoryName, productId) => {
    try {
      const { data } = await this.api.post(`/category/add-product/${categoryName}/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  editProduct = async (productId, product) => {
    try {
      const { data } = await this.api.put(`/products/${productId}`, product);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  removeProduct = async (productId) => {
    try {
      const { data } = await this.api.delete(`/products/${productId}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  addImages = async (formData) => {
    try {
      const { data } = await this.api.post('/products/image', formData);
      return data;
    } catch (error) {
      throw error;
    }
  }

  addCategory = async (category) => {
    try {
      const { data } = await this.api.post('/category', category);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  
  getAllProducts = async () => {
    try {
      const { data } = await this.api.get('/products');
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  
  getAllCategories = async () => {
    try {
      const { data } = await this.api.get('/category');
      return data
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getCategoryByName = async (categoryName) =>{
    try {
      const { data } = await this.api.get(`/category/name/${categoryName}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getCategoryById = async (categoryId) => {
    try {
      const { data } = await this.api.get(`/category/${categoryId}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  removeCategory = async (categoryId) => {
    try {
      await this.api.delete(`/category/${categoryId}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  editCategory = async(categoryId, category) => {
    try {
      const { data } = await this.api.put(`/category/${categoryId}`, category);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
}

const amarilisApi = new AmarilisApi();
export default amarilisApi;
