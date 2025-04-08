import apiCall from 'modules/common/utils/apiCall';
import { Dispatch } from 'redux';

import { errorMessages } from 'modules/auth/constants/errorMessages';
import { LOGIN } from './actionTypes';


export const loginUser = (data: { email: string; password: string }) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: LOGIN.pending });

        try {
            const response = await apiCall({
                method: 'POST',
                url: '/auth/login',
                data: {
                    email: data.email,
                    password: data.password,
                },
            });

            const { access_token, refresh_token } = response.data;

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            dispatch({
                type: LOGIN.success,
                payload: { access_token, refresh_token },
            });
        } catch (error: any) {
            const errorCode: keyof typeof errorMessages = error?.response?.data?.errorCode;
            const errorMessage = errorMessages[errorCode] || 'Login failed';
            dispatch({
                type: LOGIN.failure,
                payload: errorMessage,
            });
        }
    };
};
