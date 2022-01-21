import React from 'react';
import css from './style.module.css';

export default function Successful() {
  return (
    <main className={css.container}>
      <section>
        <div className={css.leftDiv}>
          <h1>Successful ✓</h1>
          <h1>Tracking code</h1>
          <h1>↓</h1>
        </div>

        <div className={css.rightDiv}>
          <img src="/c.png" alt="" height="100%" />
        </div>
      </section>
    </main>
  );
}
