import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';

export default function Menu() {
  return (
    <div className={css.container}>
      <Link to="/">
        <button type="button">Home</button>
      </Link>

      <Link to="/dashboard">
        <button type="button">Dashboard</button>
      </Link>

      <Link to="/create-ticket">
        <button type="button">CreateTicket</button>
      </Link>

      <Link to="/ticket-query">
        <button type="button">Ticket Query</button>
      </Link>

      <Link to="/login">
        <button onClick={() => localStorage.clear()} type="button">
          Sing In / Out
        </button>
      </Link>
    </div>
  );
}
