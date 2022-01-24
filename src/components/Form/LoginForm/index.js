/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import css from './style.module.css';

export default function LoginForm() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (val) => {
      if (val.username === 'kodluyoruz' && val.password === 'bootcamp159') {
        navigate('/dashboard');
      }
    },
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h1>Sign In Dashboard</h1>

      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        onChange={handleChange}
        placeholder="kodluyoruz"
        value={values.email}
      />

      <label htmlFor="password">Password</label>
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
