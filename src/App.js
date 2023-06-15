import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import NavBar from "./components/Navbar/Navbar";
import LoginPage from './pages/Login';
import Footer from './components/Footer/Footer'
import AccountPage from './pages/Account';
import IsAnon from './components/IsAnon/IsAnon';
import IsPrivate from './components/IsPrivate/IsPrivate';
import ProductCard from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductCard/>
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/admin/login' element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path='/admin/account' element={ <AccountPage /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
