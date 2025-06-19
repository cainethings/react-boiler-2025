import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import ForgotPassword from './pages/Account/ForgotPassword';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
