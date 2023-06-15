import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from './pages/Login';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import AllProductsPage from "./pages/AllProducts";
import CreateProductPage from "./pages/CreateProduct";
import Categories from "./pages/Category";
import CategoryCrud from "./pages/CategoryCrud";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/admin/login' element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path='/admin/products/create' element={ <CreateProductPage /> } />
        <Route path='/admin/products' element={<AllProductsPage />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/categories/:categoryId' element={<CategoryCrud />} />
      </Routes>
    </div>
  );
}

export default App;
