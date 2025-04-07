import React from 'react';
import { useForm } from 'react-hook-form';

import { EmailVerificationFormProps, EmailVerificationFormData } from './types';
import styles from './EmailVerificationForm.module.scss';

const EmailVerificationForm: React.FC<EmailVerificationFormProps> = ({ onSubmit, requestStatus }) => {
    const { register, handleSubmit } = useForm<EmailVerificationFormData>();

    return (
        <form className={ styles.emailVerificationForm } onSubmit={ handleSubmit(onSubmit) }>
            <h2 className={ styles.title }>Підтвердження пошти</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" { ...register('email') } required />
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                disabled={ requestStatus === 'pending' }
            >
                { requestStatus === 'pending' ? 'Відправляємо...' : 'Надіслати код' }
            </button>
        </form>
    );
};

export default EmailVerificationForm;
