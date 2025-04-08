import api from 'api/axios';
import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'modules/common/utils/createAsyncAction';
import createAction from './index';
import { EmailVerificationFormData } from 'modules/auth/components/EmailVerificationForm/types';
import { errorMessages } from 'modules/auth/constants/errorMessages';

const SEND_VERIFICATION_CODE = createAsyncAction(createAction('SEND_VERIFICATION_CODE'));
export { SEND_VERIFICATION_CODE };

export const sendVerificationCode = (data: EmailVerificationFormData) => async (dispatch: any) => {
    dispatch({ type: SEND_VERIFICATION_CODE.pending });

    try {
        await apiCall({
            method: 'POST',
            url: '/auth/send-verification-code',
            data: {
                email: data.email,
            },
        });

        dispatch({ type: SEND_VERIFICATION_CODE.success });
    } catch (error: any) {
        dispatch({ type: SEND_VERIFICATION_CODE.failure });
    }
};
