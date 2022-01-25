/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import css from './style.module.css';
import Menu from '../../components/Menu';

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
              <td className={css.loading}>
                <h1>Loading...</h1>
              </td>
            ) : (
              tickets.map((data) => {
                return (
                  <tr>
                    <td className="tableName">{data.name}</td>
                    <td>{data.details}</td>
                    <td>{data.ticketNumber}</td>
                    <td>{data.date}</td>
                    <td className={data.status}>{data.status}</td>
                    <td>
                      <img src="/edit-icon.svg" alt="edit-icon" />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <Menu />
    </div>
  );
}
