import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import MainPage from "./components/MainPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/protected" element={<ProtectedPage />} />
            </Routes>
        </Router>
    );
};

export default App;
