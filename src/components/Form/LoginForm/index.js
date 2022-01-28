import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginFormValid } from '../validations/LoginFormValid';
import css from './style.module.css';

export default function LoginForm() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (val) => {
      if (val.username === 'kodluyoruz' && val.password === 'bootcamp159') {
        localStorage.setItem('auth', true);
        navigate('/dashboard');
      }
    },
    validationSchema: LoginFormValid,
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h1>Sign In Dashboard</h1>

      <label htmlFor="username">
        Username {errors.username && <span> {errors.username} </span>}
      </label>
      <input
        name="username"
        type="text"
        onChange={handleChange}
        placeholder="kodluyoruz"
        value={values.username}
      />

      <label htmlFor="password">
        Password {errors.password && <span> {errors.password} </span>}
      </label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="bootcamp159"
        value={values.password}
      />

      <button type="submit">Sing In</button>
    </form>
  );
}
