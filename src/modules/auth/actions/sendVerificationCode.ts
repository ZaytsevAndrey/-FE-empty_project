import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';
import createAction from './';
import { EmailVerificationFormData } from 'modules/auth/components/EmailVerificationForm/types';

export const SEND_VERIFICATION_CODE = createAsyncAction(createAction('SEND_VERIFICATION_CODE'));

export function sendVerificationCode(data: EmailVerificationFormData) {
    return (dispatch: any) => {
        dispatch({ type: SEND_VERIFICATION_CODE.pending });

        return apiCall(() =>
            ({
                method: 'POST',
                url: '/auth/send-code',
                data: { email: data.email },
            })
        )
            .then(() => {
                dispatch({ type: SEND_VERIFICATION_CODE.success });
            })
            .catch(() => {
                dispatch({ type: SEND_VERIFICATION_CODE.failure });
            });
    };
}
