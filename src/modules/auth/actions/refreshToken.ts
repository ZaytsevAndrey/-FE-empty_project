import { Dispatch } from 'redux';

import apiCall from 'shared/utils/apiCall';
import { refreshTokenAsync } from './index';

export const refreshToken = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: refreshTokenAsync.pending });

        try {
            const response = await apiCall({
                method: 'POST',
                url: '/auth/refresh',
                data: {
                    refresh_token: localStorage.getItem('refresh_token'),
                },
            });

            const { access_token, refresh_token } = response.data;

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            dispatch({
                type: refreshTokenAsync.success,
                payload: { access_token, refresh_token },
            });
        } catch (error: any) {
            dispatch({
                type: refreshTokenAsync.failure,
                payload: error?.response?.data?.message || 'Refresh failed',
            });
            throw error;
        }
    };
};
