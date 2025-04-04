import createAsyncAction from 'shared/utils/createAsyncAction';
import createNamespacedAction from 'shared/utils/createNamespacedAction';

const createAction = createNamespacedAction('auth');

export const LOGIN = createAction('LOGIN');
export const loginAsync = createAsyncAction(LOGIN);

export const REGISTER = createAction('REGISTER');
export const registerAsync = createAsyncAction(REGISTER);

const REFRESH_TOKEN = createAction('REFRESH_TOKEN');
export const refreshTokenAsync = createAsyncAction(REFRESH_TOKEN);

export default createAction;