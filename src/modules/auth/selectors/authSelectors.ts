import { RootState } from 'store/types';

export const getAccessToken = (state: RootState): string | null =>
    state.auth.access_token;

export const getRefreshToken = (state: RootState): string | null =>
    state.auth.refresh_token;

export const getLoginStatus = (state: RootState): string =>
    state.auth.loginStatus;

export const getAuthError = (state: RootState): string | null =>
    state.auth.error;

export const isAuthenticated = (state: RootState): boolean =>
    Boolean(state.auth.access_token && state.auth.refresh_token);

export const getRegisterStatus = (state: RootState) => state.auth.registerStatus;


export const getIsAuthenticated = (state: RootState) =>
    Boolean(state.auth.access_token);
