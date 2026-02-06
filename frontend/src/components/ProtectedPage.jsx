import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import biblioteki do obsługi ciasteczek
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token'); // Użyj ciasteczek do pobrania tokenu
        if (!token) {
            setMessage('Musisz być zalogowany, aby zobaczyć tę stronę.');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/protected-route', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Błąd dostępu do zawartości zabezpieczonej.');
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        Cookies.remove('token'); // Usuń token z ciasteczek
        navigate('/'); // Przekieruj do strony logowania
    };

    return (
        <div>
            <h2>Chroniona Strona</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>Wyloguj się</button> {/* Przycisk wylogowania */}
        </div>
    );
};

export default ProtectedPage;
