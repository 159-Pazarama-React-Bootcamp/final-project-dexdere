/* eslint-disable */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket } from '../../../redux/mockAPI';
import css from './style.module.css';

export default function QueryForm() {
  const dispatch = useDispatch();
  const ticketNumber = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTicket());
  }, []);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      ticketCode: '',
    },
    onSubmit: (val) => {
      console.log(ticketNumber);
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
