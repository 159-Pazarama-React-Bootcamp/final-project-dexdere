import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './style.module.css';

export default function Menu() {
  const location = useLocation();
  const [active, setActive] = useState('');
  const isActive = {
    home: active === '/' ? 'active' : '',
    dashboard: active === '/dashboard' ? 'active' : '',
    createTicket: active === '/create-ticket' ? 'active' : '',
    ticketQuery: active === '/ticket-query' ? 'active' : '',
    sign: active === '/login' ? 'active' : '',
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className={css.container}>
      <Link to="/">
        <button id={isActive.home} type="button">
          Home
        </button>
      </Link>

      <Link to="/dashboard">
        <button id={isActive.dashboard} type="button">
          Dashboard
        </button>
      </Link>

      <Link to="/create-ticket">
        <button id={isActive.createTicket} type="button">
          Create Ticket
        </button>
      </Link>

      <Link to="/ticket-query">
        <button id={isActive.ticketQuery} type="button">
          Ticket Query
        </button>
      </Link>

      <Link to="/login">
        <button id={isActive.sign} onClick={() => localStorage.clear()} type="button">
          {localStorage.getItem('auth') ? 'Sign Out' : 'Sign In'}
        </button>
      </Link>
    </div>
  );
}
