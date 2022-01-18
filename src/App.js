import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTicket from './pages/CreateTicket';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Successful from './pages/Successful';
import TicketQuery from './pages/TicketQuery';
import Home from './pages/Home';

// eslint-disable-next-line react/prop-types
// function PrivateRoute({ children }) {
//   return localStorage.getItem('auth') ? <Navigate to="/main-page" /> : children;
// }

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          /> */}
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
