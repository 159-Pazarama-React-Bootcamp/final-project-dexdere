import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateTicket from './pages/CreateTicket';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Successful from './pages/Successful';
import TicketQuery from './pages/TicketQuery';
import Home from './pages/Home';
import Menu from './components/Menu';
import EditTicket from './pages/EditTicket';
import NotFound from './pages/NotFound';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  return localStorage.getItem('auth') ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

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
          <Route path="/edit-ticket/:id" element={<EditTicket />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
