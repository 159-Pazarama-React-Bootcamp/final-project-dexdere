import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './style.module.css';

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  async function getTicket() {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => response.data)
      .then((data) => setTickets(data));
  }

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.tableDiv}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Ticket Number</th>
              <th>Date</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td className={css.loading}>
                  <h1>Loading...</h1>
                </td>
              </tr>
            ) : (
              tickets.map((data) => {
                return (
                  <tr key={data.ticketNumber}>
                    <td className="tableName">
                      {data.name} {data.surname}
                    </td>
                    <td>{data.details}</td>
                    <td>{data.ticketNumber}</td>
                    <td>{data.date}</td>
                    <td className={data.status}>{data.status}</td>
                    <td>
                      <Link to={`/edit-ticket/${data.id}`}>
                        <img src="/edit-icon.svg" alt="edit-icon" />
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
