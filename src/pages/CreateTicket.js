import React from 'react';
import css from './CreateTicket.module.css';
import CreateTicketForm from '../components/Form/CreateTicketForm';

export default function CreateTicket() {
  return (
    <div className={css.container}>
      <div>
        <CreateTicketForm />
      </div>
    </div>
  );
}
