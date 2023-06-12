import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import AccountPage from './pages/Account';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>Amarílis</div>} />
        <Route path='/admin/signup' element={<SignupPage />} />
        <Route path='/admin/login' element={<LoginPage />} />
        <Route path='/admin/account' element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
