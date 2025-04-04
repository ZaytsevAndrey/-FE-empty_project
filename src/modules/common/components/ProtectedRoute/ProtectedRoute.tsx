import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from 'modules/auth/selectors/authSelectors';

interface Props {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const loggedIn = useSelector(isAuthenticated);

    if (!loggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
