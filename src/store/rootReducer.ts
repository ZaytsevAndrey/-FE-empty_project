import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'modules/auth/reducers/authReducer';
import forgotPasswordReducer from 'modules/auth/reducers/forgotPasswordReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
