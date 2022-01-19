import React from 'react';
import css from './TicketQuery.module.css';
import QueryForm from '../components/Form/QueryForm';

export default function TicketQuery() {
  return (
    <div className={css.container}>
      <div>
        <QueryForm />
      </div>
    </div>
  );
}
