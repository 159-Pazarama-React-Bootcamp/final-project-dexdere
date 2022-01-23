/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './style.module.css';

export default function Successful() {
  const dispatch = useDispatch();
  const ticketNumber = useSelector((state) => state.createTicket.ticketNumber);

  return (
    <main className={css.container}>
      <section>
        <div className={css.leftDiv}>
          <h1 className={css.successful}>Successful ✓</h1>
          <h1>Tracking code</h1>
          <h1>↓</h1>
          <h1 className={css.ticketNumber}>
            {localStorage.getItem('ticketNumber')}
          </h1>
          <Link to="/">
            <button>Home Page</button>
          </Link>
          <Link to="/ticket-query">
            <button>Ticket Query</button>
          </Link>
        </div>

        <div className={css.rightDiv}>
          <img src="/successful.png" alt="" height="100%" />
        </div>
      </section>
    </main>
  );
}
