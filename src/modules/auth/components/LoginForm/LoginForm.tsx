import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LoginFormProps } from './types';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, requestStatus }) => {
    const { register, handleSubmit } = useForm<{ username: string; password: string }>();

    return (
        <form className={ styles.loginForm } onSubmit={ handleSubmit(onSubmit) }>
            <h2 className={ styles.title }>Логін</h2>

            <div className={ styles.inputGroup }>
                <label htmlFor="username">Email</label>
                <input id="username" type="email" { ...register('username') } required />
            </div>

            <div className={ styles.inputGroup }>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" { ...register('password') } required />
            </div>

            <button
                type="submit"
                className={ styles.submitButton }
                disabled={ requestStatus === 'pending' }
            >
                { requestStatus === 'pending' ? 'Вхід...' : 'Увійти' }
            </button>

            <div className={ styles.redirect }>
                Немає акаунту? <Link to="/register">Зареєструватись</Link>
            </div>

            <div className={ styles.redirect }>
                Забули пароль? <Link to="/forgot-password">Відновити</Link>
            </div>
        </form>
    );
};

export default LoginForm;
