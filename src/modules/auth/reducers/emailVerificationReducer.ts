import createReducer from 'shared/utils/createReducer';
import requestsStatuses from 'shared/constants/requestsStatuses';
import { SEND_VERIFICATION_CODE } from 'modules/auth/actions/sendVerificationCode';

export interface EmailVerificationState {
    status: string;
}

const defaultState: EmailVerificationState = {
    status: requestsStatuses.default,
};

const emailVerificationReducer = createReducer<EmailVerificationState>(defaultState, {
    [SEND_VERIFICATION_CODE.pending]: (state) => ({
        ...state,
        status: requestsStatuses.pending,
    }),

    [SEND_VERIFICATION_CODE.success]: (state) => ({
        ...state,
        status: requestsStatuses.success,
    }),

    [SEND_VERIFICATION_CODE.failure]: (state) => ({
        ...state,
        status: requestsStatuses.failure,
    }),
});

export default emailVerificationReducer;
