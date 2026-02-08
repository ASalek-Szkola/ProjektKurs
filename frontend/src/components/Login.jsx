import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

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
            
            Cookies.set('token', response.data.token, { expires: 1 });
            navigate('/protected');
        } catch (error) {
            setErrorMessage('Niepoprawne dane logowania');
        }
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>Login</p>
            
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                    <label htmlFor="username">Nazwa</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Hasło</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.forgot}>
                        <a rel="noopener noreferrer" href="#">Zapomniałeś hasła?</a>
                    </div>
                </div>

                <button className={styles.sign} type="submit">Zaloguj się</button>
            </form>

            {errorMessage && (
                <p className={styles.error}>{errorMessage}</p>
            )}

            <p className={styles.signup}>
                Nie masz konta?
                <a href="/register" onClick={handleRegisterClick}> Zarejestruj się</a>
            </p>
        </div>
    );
};

export default Login;