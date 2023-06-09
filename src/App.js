import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/login' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
