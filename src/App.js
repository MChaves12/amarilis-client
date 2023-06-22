import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from './pages/Login';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import ProductCrudPage from "./pages/ProductCrud";
import AllProductsPage from "./pages/AllProducts";
import CreateProductPage from "./pages/CreateProduct";
import Categories from "./pages/Category";
import CategoryCrud from "./pages/CategoryCrud";
import AddProductToCategory from "./pages/AddProductToCat";
import CreateCategory from "./pages/CreateCategory";
import HomePage from "./pages/HomePage";
import ProductsForCategory from "./pages/ProductsForCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/name/:categoryName' element={<ProductsForCategory />} />
        <Route path='/admin/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/admin/login' element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path='/admin/products' element={ <IsPrivate> <AllProductsPage /> </IsPrivate>}  />
        <Route path='/admin/products/:productId' element={<IsPrivate> <ProductCrudPage /> </IsPrivate> } />
        <Route path='/admin/products/create' element={ <IsPrivate> <CreateProductPage /> </IsPrivate>  } />
        
        <Route path='/admin/category/add-product/:productId' element={ <IsPrivate> <AddProductToCategory />  </IsPrivate>} />
        <Route path='/admin/category' element={<IsPrivate> <Categories /> </IsPrivate>} />
        <Route path='/admin/category/create' element={<IsPrivate> <CreateCategory /> </IsPrivate>} />
        <Route path='/admin/category/:categoryId' element={<IsPrivate> <CategoryCrud /> </IsPrivate>} />
        <Route path='/admin/category/add-product/:categoryName/:categoryId' element={<IsPrivate> <CategoryCrud /> </IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
