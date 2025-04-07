import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';
import createAction from './';
import { ResetPasswordFormData } from 'modules/auth/components/ResetPasswordForm/types';

const RESET_PASSWORD = createAsyncAction(createAction('RESET_PASSWORD'));
export { RESET_PASSWORD };

export function resetPassword(data: ResetPasswordFormData) {
    return (dispatch: any) => {
        dispatch({ type: RESET_PASSWORD.pending });

        return apiCall(() =>
            api.post('/auth/reset-password', {
                code: data.code,
                password: data.password,
            })
        )
            .then(() => {
                dispatch({ type: RESET_PASSWORD.success });
            })
            .catch(() => {
                dispatch({ type: RESET_PASSWORD.failure });
            });
    };
}
