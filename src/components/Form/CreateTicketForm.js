/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import css from './CreateTicketForm.module.css';
import { CreateFormValid } from './validations/CreateFormValid';

export default function LoginForm() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      tcNo: '',
      address: '',
      details: '',
      file: '',
      ticketNumber: new Date().valueOf(),
    },
    onSubmit: (val) => {
      console.log(JSON.stringify(val, null, 2));
    },
    validationSchema: CreateFormValid,
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h1>Create Ticket</h1>

      <main className={css.mainDiv}>
        <div className={css.divHalf}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />

          <label htmlFor="surname">Surname</label>
          <input
            name="surname"
            type="text"
            onChange={handleChange}
            value={values.surname}
          />

          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="number"
            onChange={handleChange}
            value={values.age}
          />

          <label htmlFor="tcNo">Tc No</label>
          <input
            name="tcNo"
            type="number"
            onChange={handleChange}
            value={values.tcNo}
          />

          <input
            name="file"
            type="file"
            onChange={handleChange}
            value={values.file}
          />
        </div>

        <div className={css.divHalf2}>
          <label htmlFor="address">Address</label>
          <textarea
            className={css.address}
            name="address"
            type="form_id"
            onChange={handleChange}
            value={values.address}
          />

          <label htmlFor="details">Ticket Details</label>
          <textarea
            className={css.details}
            name="details"
            type="form_id"
            onChange={handleChange}
            value={values.details}
          />
        </div>
      </main>

      <button type="submit">Send Ticket</button>
    </form>
  );
}
