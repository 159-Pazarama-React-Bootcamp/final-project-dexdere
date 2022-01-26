import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import css from './style.module.css';

export default function QueryForm() {
  const [ticketNumber, setTicketNumber] = useState([]);
  const [inputTicket, setInputTicket] = useState('');

  async function getTicket() {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => response.data)
      .then((data) => setTicketNumber(data));
  }

  useEffect(() => {
    getTicket();
  }, []);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      ticketCode: '',
    },
    onSubmit: (val) => {
      setInputTicket(val.ticketCode);
    },
  });
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <main>
        <h1>Ticket Status Query</h1>

        <input
          className="ticketCode"
          name="ticketCode"
          type="text"
          onChange={handleChange}
          value={values.email}
        />

        <button type="submit">Check Status</button>
      </main>

      <div className={css.result}>
        {ticketNumber.map((data) => {
          return (
            data.ticketNumber === inputTicket && (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {data.name} {data.surname}
                    </td>
                    <td className={data.status}>{data.status}</td>
                    <td>{data.details}</td>
                  </tr>
                </tbody>
              </table>
            )
          );
        })}
      </div>
    </form>
  );
}
