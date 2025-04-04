import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { forgotPassword } from 'modules/auth/actions/forgotPassword';
import { getForgotPasswordStatus } from 'modules/auth/selectors/forgotPasswordSelectors';
import requestsStatuses from 'shared/constants/requestsStatuses';

import ForgotPasswordForm from './ForgotPasswordForm';
import { ForgotPasswordFormData } from './types';
import type { AppDispatch } from 'store/types';

const ForgotPasswordFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const requestStatus = useSelector(getForgotPasswordStatus);

    const handleSubmit = (data: ForgotPasswordFormData) => {
        dispatch(forgotPassword(data));
    };

    useEffect(() => {
        if (requestStatus === requestsStatuses.success) {
            navigate('/login');
        }
    }, [requestStatus, navigate]);

    return (
        <ForgotPasswordForm
            onSubmit={ handleSubmit }
            requestStatus={ requestStatus }
        />
    );
};

export default ForgotPasswordFormContainer;
