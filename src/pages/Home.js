import React from 'react';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.homeBody}>
      <div>
        
          <button className={css.createBtn} type="button">Create Ticket</button>
          <button className={css.queryBtn} type="button">Ticket Query</button>
        
        <button className={css.dasboardBtn} type="button">
          Admin Dashboard
        </button>
      </div>
    </div>
  );
}
