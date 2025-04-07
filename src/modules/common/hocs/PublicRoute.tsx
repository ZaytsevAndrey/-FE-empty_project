import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'modules/auth/selectors/authSelectors';

type PublicRouteProps = {
    children: React.ReactElement;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);

    return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
