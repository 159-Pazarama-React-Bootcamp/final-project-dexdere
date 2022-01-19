/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import './LoginForm.css';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <h1>Sign In Dashboard</h1>

      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Sing In</button>
    </form>
  );
}
