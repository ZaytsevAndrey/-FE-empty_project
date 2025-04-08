import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AppDispatch } from 'store/types';
import { registerUser } from 'modules/auth/actions/registerUser';
import { getRegisterStatus, getAuthError } from 'modules/auth/selectors/authSelectors';
import requestsStatuses from 'modules/common/constants/requestsStatuses';

import { RegisterFormData } from './types';
import { registerSchema } from './validation/schema';
import RegisterForm from './RegisterForm';
import setBackendErrors from 'modules/common/utils/setBackendErrors';

const RegisterFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const registerStatus = useSelector(getRegisterStatus);
    const backendError = useSelector(getAuthError) as Record<string, string> | null;

    const {
        handleSubmit,
        setError,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormData) => {
        dispatch(registerUser(data));
    };

    useEffect(() => {
        if (backendError) {
            setBackendErrors(backendError, setError);
        }
    }, [backendError, setError]);

    useEffect(() => {
        if (registerStatus === requestsStatuses.success) {
            navigate('/login');
        }
    }, [registerStatus, navigate]);

    return (
        <RegisterForm
            onSubmit={ onSubmit }
            requestStatus={ registerStatus }
        />
    );
};

export default RegisterFormContainer;
