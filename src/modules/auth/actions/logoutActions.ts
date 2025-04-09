import { LOGOUT } from './actionTypes';
import apiCall from 'modules/common/utils/apiCall';

export const logout = (redirect = false) => async (dispatch: any) => {
    await apiCall({
        method: 'POST',
        url: '/auth/logout',
    }).catch(
        (error: any) => {
            console.log(error);
        }
    );

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');


    dispatch({ type: LOGOUT });

    if (redirect) {
        window.location.href = '/login';
    }
};
