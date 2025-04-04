import createAction from './';

export const LOGOUT = createAction('LOGOUT');

export const logout = (redirect = false) => {
    return (dispatch: any) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        dispatch({ type: LOGOUT });

        if (redirect) {
            window.location.href = '/login';
        }
    };
};
