import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';
import createAction from './';
import { EmailVerificationFormData } from 'modules/auth/components/EmailVerificationForm/types';

const SEND_VERIFICATION_CODE = createAsyncAction(createAction('SEND_VERIFICATION_CODE'));
export { SEND_VERIFICATION_CODE };

export function sendVerificationCode(data: EmailVerificationFormData) {
    return (dispatch: any) => {
        dispatch({ type: SEND_VERIFICATION_CODE.pending });

        return apiCall(() =>
            api.post('/auth/send-verification-code', {
                code: data.email ,
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
