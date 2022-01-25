import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div>
        <Link to="/create-ticket">
          <button className={css.createBtn} type="button">
            Create Ticket
          </button>
        </Link>

        <Link to="/ticket-query">
          <button className={css.queryBtn} type="button">
            Ticket Query
          </button>
        </Link>

        <Link to={localStorage.getItem('auth') ? '/dashboard' : '/login'}>
          <button className={css.dasboardBtn} type="button">
            Admin Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
