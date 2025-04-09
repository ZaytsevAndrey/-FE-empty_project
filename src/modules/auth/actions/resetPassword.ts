import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'modules/common/utils/createAsyncAction';
import createAction from './index';
import { ResetPasswordFormData } from 'modules/auth/components/ResetPasswordForm/types';
import { errorMessages } from 'modules/auth/constants/errorMessages';

const RESET_PASSWORD = createAsyncAction(createAction('RESET_PASSWORD'));
export { RESET_PASSWORD };

export const resetPassword = (data: { token: string; newPassword: string }) => async (dispatch: any) => {
    dispatch({ type: RESET_PASSWORD.pending });

    try {
        await apiCall({
            method: 'POST',
            url: '/auth/reset-password',
            data: {
                token: data.token,
                newPassword: data.newPassword,
            },
        });

        dispatch({ type: RESET_PASSWORD.success });
    } catch (error: any) {
        const errorCode: keyof typeof errorMessages = error?.response?.data?.errorCode;
        dispatch({
            type: RESET_PASSWORD.failure,
            payload: errorCode,
        });
    }
};
