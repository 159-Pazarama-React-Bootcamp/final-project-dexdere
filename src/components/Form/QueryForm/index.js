import React from 'react';
import { useFormik } from 'formik';
import css from './style.module.css';

export default function QueryForm() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      ticketCode: '',
    },
    onSubmit: (val) => {
      console.log(JSON.stringify(val, null, 2));
    },
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h1>Ticket Status Query</h1>

      <input
        name="ticketCode"
        type="text"
        onChange={handleChange}
        value={values.email}
      />

      <button type="submit">Check Status</button>
    </form>
  );
}
