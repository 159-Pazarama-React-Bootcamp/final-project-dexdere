/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import css from './CreateTicketForm.module.css';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      tcNo: '',
      address: '',
      details: '',
      photograph: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={css.container} onSubmit={formik.handleSubmit}>
      <h1>Create Ticket</h1>

      <main className={css.mainDiv}>
        <div className={css.divHalf}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <label htmlFor="surname">Surname</label>
          <input
            name="surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surname}
          />

          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          />

          <label htmlFor="tcNo">Tc No</label>
          <input
            name="tcNo"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.tcNo}
          />

          <input
            name="photograph"
            type="file"
            onChange={formik.handleChange}
            value={formik.values.photograph}
          />
        </div>

        <div className={css.divHalf2}>
          <label htmlFor="address">Address</label>
          <textarea
            className={css.address}
            name="address"
            type="form_id"
            onChange={formik.handleChange}
            value={formik.values.address}
          />

          <label htmlFor="details">Ticket Details</label>
          <textarea
            className={css.details}
            name="details"
            type="form_id"
            onChange={formik.handleChange}
            value={formik.values.details}
          />
        </div>
      </main>

      <button type="submit">Send Ticket</button>
    </form>
  );
}
