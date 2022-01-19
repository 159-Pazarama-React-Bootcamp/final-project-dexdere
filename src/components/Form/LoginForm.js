/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (val) => {
      console.log(JSON.stringify(val, null, 2));
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
        value={values.email}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">Sing In</button>
    </form>
  );
}
