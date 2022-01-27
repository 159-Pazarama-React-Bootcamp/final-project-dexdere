import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './style.module.css';

export default function Menu() {
  useLocation();

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
          {localStorage.getItem('auth') ? 'Sing Out' : 'Sing In'}
        </button>
      </Link>
    </div>
  );
}
