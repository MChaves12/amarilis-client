import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import NavBar from "./components/Navbar/Navbar";
import LoginPage from './pages/Login';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<SignupPage />} />
        <Route path='/admin/login' element={<LoginPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
