import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTicketState } from '../../../redux/ticket/createTicketSlice';
import { CreateFormValid } from '../validations/CreateFormValid';
import css from './style.module.css';

export default function CreateTicketForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      tcNo: '',
      address: '',
      details: '',
      file1: '',
      ticketNumber: new Date().valueOf(),
    },
    onSubmit: (val) => {
      dispatch(changeTicketState(val));
      navigate('/successful');
    },
    validationSchema: CreateFormValid,
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <h1>Create Ticket</h1>

      <main className={css.mainDiv}>
        <div className={css.divHalf}>
          <label htmlFor="name">
            Name {errors.name ? <span> {errors.name} </span> : null}
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />

          <label htmlFor="surname">
            Surname {errors.surname ? <span> {errors.surname} </span> : null}
          </label>
          <input
            name="surname"
            type="text"
            onChange={handleChange}
            value={values.surname}
          />

          <label htmlFor="age">
            Age {errors.age ? <span> {errors.age} </span> : null}
          </label>
          <input
            name="age"
            type="text"
            onChange={handleChange}
            value={values.age}
          />

          <label htmlFor="tcNo">
            TC Kimlik No {errors.tcNo ? <span> {errors.tcNo} </span> : null}
          </label>
          <input
            name="tcNo"
            type="text"
            onChange={handleChange}
            value={values.tcNo}
          />

          <input
            name="file1"
            type="file"
            onChange={handleChange}
            // onChange={(event) => setFieldValue('file1', event.target.files[0])}
          />
        </div>

        <div className={css.divHalf2}>
          <label htmlFor="address">
            Address {errors.address ? <span> {errors.address} </span> : null}
          </label>
          <textarea
            className={css.address}
            name="address"
            type="form_id"
            onChange={handleChange}
            value={values.address}
          />

          <label htmlFor="details">
            Ticket Details{' '}
            {errors.details ? <span> {errors.details} </span> : null}
          </label>
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
