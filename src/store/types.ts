import { AuthState } from 'modules/auth/reducers/authReducer';
import { ForgotPasswordState } from 'modules/auth/reducers/forgotPasswordReducer';


export type AppDispatch = (...args: any[]) => any;

export interface RootState {
    auth: AuthState;
    forgotPassword: ForgotPasswordState;
}