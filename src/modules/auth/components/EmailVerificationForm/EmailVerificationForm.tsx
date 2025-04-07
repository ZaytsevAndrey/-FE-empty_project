import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { EmailVerificationFormData } from './EmailVerificationFormContainer';
import styles from './EmailVerificationForm.module.scss';

interface Props {
    onSubmit: (data: EmailVerificationFormData) => void;
    register: UseFormRegister<EmailVerificationFormData>;
    errors: FieldErrors<EmailVerificationFormData>;
    requestStatus: string;
}

const EmailVerificationForm: React.FC<Props> = ({
                                                    onSubmit,
                                                    register,
                                                    errors,
                                                    requestStatus,
                                                }) => {
    return (
        <form className={ styles.form } onSubmit={ (e) => e.preventDefault() }>
            <h2 className={ styles.title }>Підтвердження пошти</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" { ...register('email') } />
                { errors.email && <span className={ styles.error }>{ errors.email.message }</span> }
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                disabled={ requestStatus === 'pending' }
                onClick={ onSubmit }
            >
                { requestStatus === 'pending' ? 'Відправка...' : 'Надіслати код' }
            </button>
        </form>
    );
};

export default EmailVerificationForm;
