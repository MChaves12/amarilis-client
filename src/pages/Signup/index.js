import './styles.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/amarilis.api';

function SignupPage () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.signup({username, email, password});
          navigate('/login');
        } catch (error) {
          setErrorMessage(error.response.data.message);
        }
      }

    return (
        <div className='container'>
            <h2>Create You're Account</h2>
            <Form onSubmit={handleSubmit} className='form-container'>
                 <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='form-input' type="text" placeholder="Username" onChange={handleUsername} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control className='form-input' type="email" placeholder="Email" onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control className='form-input' type="password" placeholder="Password" onChange={handlePassword} />
                </Form.Group>
                <button className='submit-btn' type='submit'>Sign up</button>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link className='login-link' to='/login'>Login</Link>
        </div>
    );
};

export default SignupPage;
