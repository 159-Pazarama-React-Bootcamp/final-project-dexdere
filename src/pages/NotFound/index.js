import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './style.module.css';

export default function NotFound() {
  const location = useLocation();

  return (
    <div className={css.container}>
      <div>
        <h1>
          <span className={css.notFound}>
            {location.pathname.substring(1)}{' '}
          </span>
          diye sayfamı olur 😁
        </h1>
        <h1>Hadi bakmıyorum bir daha yaz 🙈</h1>
        <img className={css.notFoundImg} src="404.svg" alt="" />
      </div>
    </div>
  );
}
