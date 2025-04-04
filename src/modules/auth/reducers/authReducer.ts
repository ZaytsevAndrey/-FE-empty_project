import { loginAsync, registerAsync, refreshTokenAsync } from 'modules/auth/actions';
import { REGISTER_USER } from '../actions/registerUser';
import { LOGOUT } from 'modules/auth/actions/logoutActions';

import createReducer from 'shared/utils/createReducer';
import requestsStatuses from 'shared/constants/requestsStatuses';

export interface AuthState {
    loginStatus: string;
    registerStatus: string;
    refreshStatus: string;
    access_token: string | null;
    refresh_token: string | null;
    error: string | null;
}

const defaultState: AuthState = {
    loginStatus: requestsStatuses.default,
    registerStatus: requestsStatuses.default,
    refreshStatus: requestsStatuses.default,
    access_token: null,
    refresh_token: null,
    error: null,
};

const authReducer = createReducer<AuthState>(defaultState, {
    [loginAsync.pending]: (state) => ({
        ...state,
        loginStatus: requestsStatuses.pending,
        error: null,
    }),

    [loginAsync.success]: (state, action) => ({
        ...state,
        loginStatus: requestsStatuses.success,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        error: null,
    }),

    [loginAsync.failure]: (state, action) => ({
        ...state,
        loginStatus: requestsStatuses.failure,
        error: action.payload,
    }),

    [registerAsync.pending]: (state) => ({
        ...state,
        registerStatus: requestsStatuses.pending,
        error: null,
    }),

    [registerAsync.success]: (state) => ({
        ...state,
        registerStatus: requestsStatuses.success,
        error: null,
    }),

    [registerAsync.failure]: (state, action) => ({
        ...state,
        registerStatus: requestsStatuses.failure,
        error: action.payload,
    }),

    [refreshTokenAsync.pending]: (state) => ({
        ...state,
        refreshStatus: requestsStatuses.pending,
        error: null,
    }),

    [refreshTokenAsync.success]: (state, action) => ({
        ...state,
        refreshStatus: requestsStatuses.success,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        error: null,
    }),

    [refreshTokenAsync.failure]: (state, action) => ({
        ...state,
        refreshStatus: requestsStatuses.failure,
        error: action.payload,
    }),

    [REGISTER_USER.pending]: (state) => ({
        ...state,
        registerStatus: requestsStatuses.pending,
    }),
    [REGISTER_USER.success]: (state) => ({
        ...state,
        registerStatus: requestsStatuses.success,
    }),
    [REGISTER_USER.failure]: (state) => ({
        ...state,
        registerStatus: requestsStatuses.failure,
    }),

    [LOGOUT]: () => ({
        ...defaultState,
    }),
});

export default authReducer;
