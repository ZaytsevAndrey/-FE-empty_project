import apiCall from 'modules/common/utils/apiCall';
import { RegisterFormData } from 'modules/auth/components/RegisterForm/types';
import { errorMessages } from 'modules/auth/constants/errorMessages';
import { REGISTER_ASYNC } from './actionTypes';

export const registerUser = (data: RegisterFormData) => async (dispatch: any) => {
    dispatch({ type: REGISTER_ASYNC.pending });

    try {
        await apiCall({
            method: 'post',
            url: '/auth/register',
            data: {
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword,
            },
        });

        dispatch({ type: REGISTER_ASYNC.success });
    } catch (error: any) {
        const errorCode: keyof typeof errorMessages = error?.response?.data?.errorCode;
        dispatch({
            type: REGISTER_ASYNC.failure,
            payload: errorCode,
        });
    }
};
