import apiCall from 'modules/common/utils/apiCall';
import createAsyncAction from 'shared/utils/createAsyncAction';
import createAction from './';
import { RegisterFormData } from 'modules/auth/components/RegisterForm/types';

const REGISTER_USER = createAsyncAction(createAction('REGISTER_USER'));
export { REGISTER_USER };

export function registerUser(data: RegisterFormData) {
    return async (dispatch: any) => {
        dispatch({ type: REGISTER_USER.pending });

        try {
            await apiCall({
                method: 'post',
                url: '/auth/register',
                data: {
                    username: data.email,
                    password: data.password,
                },
            });

            dispatch({ type: REGISTER_USER.success });
        } catch (e) {
            dispatch({ type: REGISTER_USER.failure });
        }
    };
}
