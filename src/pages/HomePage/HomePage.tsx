import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from 'modules/auth/actions/logoutActions';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch<any>(logout(true));
    };

    return (
        <div style={{ padding: 40 }}>
            ✅ Home Page Loaded
            <div style={{ marginTop: 20 }}>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default HomePage;
