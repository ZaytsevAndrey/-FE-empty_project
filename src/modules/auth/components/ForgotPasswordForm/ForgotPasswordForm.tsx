import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ForgotPasswordFormProps } from './types';
import styles from './ForgotPasswordForm.module.scss';

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit, requestStatus }) => {
    const { register, handleSubmit } = useForm<{ email: string }>();

    return (
        <form className={ styles.forgotPasswordForm } onSubmit={ handleSubmit(onSubmit) }>
            <h2 className={ styles.title }>Відновлення паролю</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" { ...register('email') } required />
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                disabled={ requestStatus === 'pending' }
            >
                { requestStatus === 'pending' ? 'Відправка...' : 'Відновити' }
            </button>

            <div className={ styles.redirect }>
                Згадали пароль? <Link to="/login">Увійти</Link>
            </div>
        </form>
    );
};

export default ForgotPasswordForm;
