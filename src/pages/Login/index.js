import './styles.css';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { storeToken } from '../../utils/token.utils';
import api from '../../api/amarilis.api';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { authenticateUser } = useContext(AuthContext);
    

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const {authToken} = await api.login({username, password});
        storeToken(authToken);
        console.log(authToken);
        authenticateUser();
        console.log('aqui');
        navigate('/admin/products')
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    }

    return (
        <div className='login-container'>
            <h2 className='title'>Login</h2>
            <Form onSubmit={handleSubmit} className='form-container'>
                 <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='form-input' type="text" placeholder="Username" onChange={handleUsername} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control className='form-input' type="password" placeholder="Password" onChange={handlePassword} />
                </Form.Group>
                <button className='login-btn' type='submit'>Login</button>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account?</p>
            <Link className='signup-link' to="/admin/signup">Signup</Link>
        </div>
    )
}

export default LoginPage;
