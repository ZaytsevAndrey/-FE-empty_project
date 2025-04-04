import { Dispatch } from 'redux';

import apiCall from 'shared/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';

import createAction from './';


export const LOGIN = createAction('LOGIN');
export const loginAsync = createAsyncAction(LOGIN);

export const loginUser = (credentials: { username: string; password: string }) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: loginAsync.pending });

        try {
            const response = await apiCall({
                method: 'POST',
                url: '/auth/login',
                data: credentials,
            });

            const { access_token, refresh_token } = response.data;

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            dispatch({
                type: loginAsync.success,
                payload: { access_token, refresh_token },
            });
        } catch (error: any) {
            dispatch({
                type: loginAsync.failure,
                payload: error?.response?.data?.message || 'Login failed',
            });
        }
    };
};
