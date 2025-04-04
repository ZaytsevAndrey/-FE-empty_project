import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';
import createAction from './';
import { ForgotPasswordFormData } from 'modules/auth/components/ForgotPasswordForm/types';

export const FORGOT_PASSWORD = createAsyncAction(createAction('FORGOT_PASSWORD'));

export function forgotPassword(data: ForgotPasswordFormData) {
    return (dispatch: any) => {
        dispatch({ type: FORGOT_PASSWORD.pending });

        return apiCall(() => api.post('/auth/forgot-password', {
            username: data.email,
        }))
            .then(() => {
                dispatch({ type: FORGOT_PASSWORD.success });
            })
            .catch(() => {
                dispatch({ type: FORGOT_PASSWORD.failure });
            });
    };
}
