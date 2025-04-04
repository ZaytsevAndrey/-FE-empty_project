import createReducer from 'shared/utils/createReducer';
import { FORGOT_PASSWORD } from 'modules/auth/actions/forgotPassword';
import requestsStatuses from 'shared/constants/requestsStatuses';

export type ForgotPasswordState = {
    requestStatus: string;
};

const initialState: ForgotPasswordState = {
    requestStatus: requestsStatuses.default,
};

export default createReducer(initialState, {
    [FORGOT_PASSWORD.pending]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.pending,
    }),
    [FORGOT_PASSWORD.success]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.success,
    }),
    [FORGOT_PASSWORD.failure]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.failure,
    }),
});
