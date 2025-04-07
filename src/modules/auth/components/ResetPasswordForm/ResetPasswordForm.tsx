import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ResetPasswordFormData } from './types';
import styles from './ResetPasswordForm.module.scss';

interface Props {
    onSubmit: (data: ResetPasswordFormData) => void;
    register: UseFormRegister<ResetPasswordFormData>;
    errors: FieldErrors<ResetPasswordFormData>;
    requestStatus: string;
    backendError?: string | null;
}

const ResetPasswordForm: React.FC<Props> = ({
    onSubmit,
    register,
    errors,
    requestStatus,
    backendError,
}) => {
    return (
        <form className={ styles.form } onSubmit={ (e) => e.preventDefault() }>
            <h2 className={ styles.title }>Скидання паролю</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="password">Новий пароль</label>
                <input id="password" type="password" { ...register('password') } />
                { errors.password && <span className={ styles.error }>{ errors.password.message }</span> }
            </div>

            <div className={ styles.inputGroup }>
                <label htmlFor="confirmPassword">Повторіть пароль</label>
                <input id="confirmPassword" type="password" { ...register('confirmPassword') } />
                { errors.confirmPassword && (
                    <span className={ styles.error }>{ errors.confirmPassword.message }</span>
                ) }
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                onClick={(e) => {
                    e.preventDefault();
                    const formData: ResetPasswordFormData = {
                        code: '',
                        password: '',
                        confirmPassword: ''
                    };
                    onSubmit(formData);
                }}
                disabled={ requestStatus === 'pending' }
            >
                { requestStatus === 'pending' ? 'Оновлення...' : 'Оновити пароль' }
            </button>
        </form>
    );
};

export default ResetPasswordForm;
