import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Registration = () => {
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

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', { name, password });
            Cookies.set('token', response.data.token, { expires: 1 });
            navigate('/protected');
        } catch (error) {
            setErrorMessage('Wystąpił błąd podczas rejestracji');
        }
    };

    return (
        <div>
            <h2>Rejestracja</h2>
            <form onSubmit={handleRegistration}>
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
                <button type="submit">Zarejestruj się</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
            <p>Masz już konto? <button onClick={() => navigate('/login')} >Zaloguj się</button></p>
        </div>
    );
};

export default Registration;
