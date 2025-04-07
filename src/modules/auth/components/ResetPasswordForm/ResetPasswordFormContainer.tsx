import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'store/types';

import { resetPassword } from 'modules/auth/actions/resetPassword';
import { getResetPasswordStatus } from 'modules/auth/selectors/resetPasswordSelectors';
import requestsStatuses from 'shared/constants/requestsStatuses';

import ResetPasswordForm from './ResetPasswordForm';
import { ResetPasswordFormData } from './types';

const ResetPasswordFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const requestStatus = useSelector(getResetPasswordStatus);

    const handleSubmit = (data: ResetPasswordFormData) => {
        dispatch(resetPassword(data));
    };

    useEffect(() => {
        if (requestStatus === requestsStatuses.success) {
            navigate('/login');
        }
    }, [requestStatus, navigate]);

    return (
        <ResetPasswordForm
            onSubmit={ handleSubmit }
            requestStatus={ requestStatus }
        />
    );
};

export default ResetPasswordFormContainer;
