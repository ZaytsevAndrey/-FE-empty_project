import React from 'react';
import { useForm } from 'react-hook-form';

import { ResetPasswordFormProps } from './types';
import styles from './ResetPasswordForm.module.scss';

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit, requestStatus }) => {
    const { register, handleSubmit } = useForm<{ code: string; newPassword: string; confirmPassword: string }>();

    return (
        <form className={ styles.resetPasswordForm } onSubmit={ handleSubmit(onSubmit) }>
            <h2 className={ styles.title }>Відновлення паролю</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="code">Код з email</label>
                <input id="code" type="text" { ...register('code') } required />
            </div>

            <div className={ styles.inputGroup }>
                <label htmlFor="newPassword">Новий пароль</label>
                <input id="newPassword" type="password" { ...register('newPassword') } required />
            </div>

            <div className={ styles.inputGroup }>
                <label htmlFor="confirmPassword">Повторіть пароль</label>
                <input id="confirmPassword" type="password" { ...register('confirmPassword') } required />
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                disabled={ requestStatus === 'pending' }
            >
                { requestStatus === 'pending' ? 'Збереження...' : 'Зберегти пароль' }
            </button>
        </form>
    );
};

export default ResetPasswordForm;
