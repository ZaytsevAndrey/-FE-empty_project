import { LOGOUT } from './actionTypes';

export const logout = (redirect = false) => async (dispatch: any) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    dispatch({ type: LOGOUT });

    if (redirect) {
        window.location.href = '/login';
    }
};
