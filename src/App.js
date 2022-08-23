import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

import Login from 'Pages/Login';

const Dashboard = lazy(() => import('Pages/Dashboard'));

const App = () => {
  const userIsLogin = false
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={userIsLogin}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
