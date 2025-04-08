import { Dispatch } from 'redux';

import apiCall from 'modules/common/utils/apiCall';
import { REFRESH_TOKEN_ASYNC } from './actionTypes';

export const refreshToken = () => async (dispatch: Dispatch) => {
    dispatch({ type: REFRESH_TOKEN_ASYNC.pending });

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
            type: REFRESH_TOKEN_ASYNC.success,
            payload: { access_token, refresh_token },
        });
    } catch (error: any) {
        dispatch({
            type: REFRESH_TOKEN_ASYNC.failure,
            payload: error?.response?.data?.message || 'Refresh failed',
        });
        throw error;
    }
};
