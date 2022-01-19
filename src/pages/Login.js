import React from 'react';
import css from './Login.module.css';
import LoginForm from '../components/Form/LoginForm';

export default function Login() {
  return (
    <div className={css.container}>
      <div>
        <div className={css.login}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
