import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { RegisterFormProps } from './types';
import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, requestStatus }) => {
    const { register, handleSubmit } = useForm<{ email: string; password: string; confirmPassword: string }>();

    return (
        <form className={ styles.registerForm } onSubmit={ handleSubmit(onSubmit) }>
            <h2 className={ styles.title }>Реєстрація</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" { ...register('email') } required />
            </div>

            <div className={ styles.inputGroup }>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" { ...register('password') } required />
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
                { requestStatus === 'pending' ? 'Реєстрація...' : 'Зареєструватись' }
            </button>

            <div className={ styles.redirect }>
                Вже є акаунт? <Link to="/login">Увійти</Link>
            </div>
        </form>
    );
};

export default RegisterForm;
