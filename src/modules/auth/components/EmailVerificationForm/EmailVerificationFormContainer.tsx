import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { AppDispatch } from 'store/types';
import { sendVerificationCode } from 'modules/auth/actions/sendVerificationCode';
import { getEmailVerificationStatus } from 'modules/auth/selectors/emailVerificationSelectors';
import setBackendErrors from 'modules/common/utils/setBackendErrors';
import requestsStatuses from 'shared/constants/requestsStatuses';

import EmailVerificationForm from './EmailVerificationForm';

const schema = z.object({
    email: z.string().email('Некоректний email'),
});

export type EmailVerificationFormData = z.infer<typeof schema>;

const EmailVerificationFormContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const requestStatus = useSelector(getEmailVerificationStatus);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<EmailVerificationFormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: EmailVerificationFormData) => {
        dispatch(sendVerificationCode({ email: data.email }))
            .then((response: any) => {
                if (response?.error) {
                    setBackendErrors(response.payload, setError);
                    return;
                }

                if (response?.meta?.requestStatus === 'fulfilled') {
                    navigate('/reset-password');
                }
            });
    };

    useEffect(() => {
        if (requestStatus === requestsStatuses.success) {
            navigate('/reset-password');
        }
    }, [requestStatus, navigate]);

    return (
        <EmailVerificationForm
            onSubmit={ handleSubmit(onSubmit) }
            register={ register }
            errors={ errors }
            requestStatus={ requestStatus }
        />
    );
};

export default EmailVerificationFormContainer;
