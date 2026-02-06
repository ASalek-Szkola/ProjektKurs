import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
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

    return (
        <div>
            <h2>Chroniona Strona</h2>
            <p>{message}</p>
        </div>
    );
};

export default ProtectedPage;
