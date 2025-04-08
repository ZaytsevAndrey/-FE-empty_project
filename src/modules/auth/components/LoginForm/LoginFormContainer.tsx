import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from 'store/types';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from 'modules/auth/actions/loginUser';
import requestsStatuses from 'modules/common/constants/requestsStatuses';
import { getLoginStatus, getAuthError } from 'modules/auth/selectors/authSelectors';

import LoginForm from './LoginForm';
import loginSchema, { LoginFormData } from './validation/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import setBackendErrors from 'modules/common/utils/setBackendErrors';

const LoginFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector(getLoginStatus);
    const backendError = useSelector(getAuthError);

    const {
        handleSubmit,
        setError,
        formState: { isSubmitting, errors },
        ...form
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    useEffect(() => {
        if (loginStatus === requestsStatuses.success) {
            navigate('/');
        }
    }, [loginStatus, navigate]);

    useEffect(() => {
        if (backendError) {
            setBackendErrors<LoginFormData>({ general: backendError }, setError);
        }
    }, [backendError, setError]);

    const onSubmit = (data: LoginFormData) => {
        dispatch(loginUser(data));
    };

    return (
        <LoginForm
            { ...form }
            onSubmit={ handleSubmit(onSubmit) }
            requestStatus={ loginStatus }
            isSubmitting={ isSubmitting }
            errors={ errors }
        />
    );
};

export default LoginFormContainer;
