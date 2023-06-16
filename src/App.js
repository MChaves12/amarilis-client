import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from './pages/Login';
import AccountPage from './pages/Account';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import ProductCrudPage from "./pages/ProductCrud";
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import AllProductsPage from "./pages/AllProducts";
import CreateProductPage from "./pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/admin/login' element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path='/admin/account' element={ <AccountPage /> } />
        <Route path='admin/products/:productId' element={ <ProductCrudPage />} />
        <Route path='/admin/products/create' element={ <CreateProductPage /> } />
        <Route path='/admin/products' element={<AllProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
