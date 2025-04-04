import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from 'store/types';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'modules/auth/actions/registerUser';
import requestsStatuses from 'shared/constants/requestsStatuses';
import { getRegisterStatus } from 'modules/auth/selectors/authSelectors';

import RegisterForm from './RegisterForm';
import { RegisterFormData } from './types';


const RegisterFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const registerStatus = useSelector(getRegisterStatus);

    const handleSubmit = (data: RegisterFormData) => {
        dispatch(registerUser(data));
    };

    useEffect(() => {
        if (registerStatus === requestsStatuses.success) {
            navigate('/login');
        }
    }, [registerStatus, navigate]);

    return (
        <RegisterForm
            onSubmit={ handleSubmit }
            requestStatus={ registerStatus }
        />
    );
};

export default RegisterFormContainer;
