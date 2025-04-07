import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import EmailVerificationPage from 'pages/EmailVerificationPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={ <ResetPasswordPage /> } />
            <Route path="/verify-email" element={ <EmailVerificationPage /> } />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
