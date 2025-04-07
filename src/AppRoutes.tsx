import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';

import PublicRoute from 'modules/common/hocs/PublicRoute';
import ProtectedRoute from 'modules/common/hocs/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/forgot-password"
                element={
                    <PublicRoute>
                        <ForgotPasswordPage />
                    </PublicRoute>
                }
            />
            <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
    );
};

export default AppRoutes;
