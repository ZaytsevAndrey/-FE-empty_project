import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'modules/auth/selectors/authSelectors';

type ProtectedRouteProps = {
    children: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
