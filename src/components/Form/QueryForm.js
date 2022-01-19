/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import css from './QueryForm.module.css';

export default function QueryForm() {
  const formik = useFormik({
    initialValues: {
      ticketCode: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={css.container} onSubmit={formik.handleSubmit}>
      <h1>Ticket Status Query</h1>

      <input
        name="ticketCode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Check Status</button>
    </form>
  );
}
