import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import MeuComponente from "./components/Navbar/Navbar";
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <MeuComponente />
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<SignupPage />} />
        <Route path='/admin/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
