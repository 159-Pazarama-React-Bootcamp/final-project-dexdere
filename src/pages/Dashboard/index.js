/* eslint-disable */
import React from 'react';
import css from './style.module.css';

export default function Dashboard() {
  return (
    <div className={css.container}>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Ticket Number</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* {dummy.map((data) => {
              return (
                <tr>
                  <td className="tableName">{data.name}</td>
                  <td>{data.details}</td>
                  <td>{data.ticketNumber}</td>
                  <td className={data.status}>{data.status}</td>
                  <td>
                    <img src="/edit-icon.svg" />
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
