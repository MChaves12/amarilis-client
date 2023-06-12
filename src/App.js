import "./App.css";
import "../src/components/Navbar/style.css"
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import MeuComponente from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <MeuComponente />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/admin/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
