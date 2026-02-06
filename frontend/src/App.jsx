import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import MainPage from "./components/MainPage";
import Registration from './components/Registration';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/protected" element={<ProtectedPage />} />
            </Routes>
        </Router>
    );
};

export default App;
