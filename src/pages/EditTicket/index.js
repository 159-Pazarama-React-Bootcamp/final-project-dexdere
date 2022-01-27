import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import css from './style.module.css';

export default function EditTicket() {
  const [ticket, setTicket] = useState([]);
  const answer = useRef();
  const status = useRef();
  const { id } = useParams();

  async function getTicket() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((response) => response.data)
      .then((data) => setTicket(data));
  }

  async function putTicket() {
    axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
      answer: answer.current.value,
      status: status.current.value,
    });
  }

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div className={css.container}>
      <div>
        <main>
          <h1>
            Edit Ticket:
            <span className={css.ticketNumber}> {ticket.ticketNumber}</span>
          </h1>

          <div className={css.divLeft}>
            <h1>Name: <span>{` ${ticket.name} ${ticket.surname}`}</span></h1>
            <h1>Age: <span>{ticket.age}</span></h1>
            <h1>Status: <span id={ticket.status}>{ticket.status}</span></h1>
            <h1>Identity Number: <span>{ticket.tcNo}</span></h1>
            <h1>Date: <span>{ticket.date}</span></h1>
            <h1>Address: <span> {ticket.address}</span></h1>
            <h1>Details: <span>{ticket.details}</span></h1>
          </div>

          <div className={css.divRight}>
            {ticket.file !== '' && (
              <a href={ticket.file} target="_blank" rel="noreferrer">
                <img src={ticket.file} alt="" height="200px" />
              </a>
            )}        
            
            <textarea
              ref={answer}
              className={css.details}
              name="answer"
              type="form_id"
            />

            <select className={css.dropDown} ref={status}>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <Link to="/dashboard">
              <button type="button" onClick={putTicket}>
                Send
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
