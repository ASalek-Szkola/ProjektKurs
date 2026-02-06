import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            navigate('/protected');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { name, password });
            Cookies.set('token', response.data.token, { expires: 1 }); // 1 dzień
            navigate('/protected');
        } catch (error) {
            setErrorMessage('Niepoprawne dane logowania');
        }
    };

    return (
        <div>
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Nazwa użytkownika:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Zaloguj się</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
            <p>Nie masz konta? <button onClick={() => navigate('/register')}>Zarejestruj się</button></p>
        </div>
    );
};

export default Login;
