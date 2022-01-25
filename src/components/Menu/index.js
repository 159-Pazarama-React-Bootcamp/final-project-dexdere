import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';

export default function Menu() {
  return (
    <div className={css.container}>
      <Link to="/">
        <button type="button">Home</button>
      </Link>

      <Link to="/login">
        <button onClick={() => localStorage.clear()} type="button">
          Sign Out
        </button>
      </Link>
    </div>
  );
}
