import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'modules/common/utils/createAsyncAction';
import createAction from './index';
import { ForgotPasswordFormData } from 'modules/auth/components/ForgotPasswordForm/types';
import { errorMessages } from 'modules/auth/constants/errorMessages';

export const FORGOT_PASSWORD = createAsyncAction(createAction('FORGOT_PASSWORD'));

export const forgotPassword = (data: ForgotPasswordFormData) => async (dispatch: any) => {
    dispatch({ type: FORGOT_PASSWORD.pending });

    try {
        await apiCall({
            method: 'POST',
            url: '/auth/forgot-password',
            data: {
                email: data.email,
            },
        });

        dispatch({ type: FORGOT_PASSWORD.success });
    } catch (error: any) {
        const errorCode: keyof typeof errorMessages = error?.response?.data?.errorCode;
        dispatch({
            type: FORGOT_PASSWORD.failure,
            payload: errorCode,
        });
    }
};

export default forgotPassword;