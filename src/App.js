/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateTicket from './pages/CreateTicket';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Successful from './pages/Successful';
import TicketQuery from './pages/TicketQuery';
import Home from './pages/Home';

function PrivateRoute({ children }) {
  return localStorage.getItem('auth') ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/ticket-query" element={<TicketQuery />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
