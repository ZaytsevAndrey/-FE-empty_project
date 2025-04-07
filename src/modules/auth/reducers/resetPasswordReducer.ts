import createReducer from 'shared/utils/createReducer';
import requestsStatuses from 'shared/constants/requestsStatuses';
import { RESET_PASSWORD } from '../actions/resetPassword';

export interface ResetPasswordState {
    requestStatus: string;
}

const defaultState: ResetPasswordState = {
    requestStatus: requestsStatuses.default,
};

const resetPasswordReducer = createReducer<ResetPasswordState>(defaultState, {
    [RESET_PASSWORD.pending]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.pending,
    }),

    [RESET_PASSWORD.success]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.success,
    }),

    [RESET_PASSWORD.failure]: (state) => ({
        ...state,
        requestStatus: requestsStatuses.failure,
    }),
});

export default resetPasswordReducer;
