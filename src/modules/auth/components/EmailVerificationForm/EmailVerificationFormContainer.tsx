import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from 'store/types';

import { EmailVerificationFormData } from './types';
import EmailVerificationForm from './EmailVerificationForm';
import { sendVerificationCode } from 'modules/auth/actions/sendVerificationCode';
import { getEmailVerificationStatus } from 'modules/auth/selectors/emailVerificationSelectors';
import requestsStatuses from 'shared/constants/requestsStatuses';

const EmailVerificationFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(getEmailVerificationStatus);

    const handleSubmit = (data: EmailVerificationFormData) => {
        dispatch(sendVerificationCode(data));
    };

    useEffect(() => {
        if (status === requestsStatuses.success) {
            navigate('/reset-password');
        }
    }, [status, navigate]);

    return (
        <EmailVerificationForm
            onSubmit={ handleSubmit }
            requestStatus={ status }
        />
    );
};

export default EmailVerificationFormContainer
