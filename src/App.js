import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

import Header from 'Pages/Utilities/Header';
import Login from 'Pages/CognitoPages/Login';
import SignUp from 'Pages/CognitoPages/SignUp';
import VerifyAccount from 'Pages/CognitoPages/VerifyAccount';

const Dashboard = lazy(() => import('Pages/Dashboard'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/verifyaccount" element={<VerifyAccount/>} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
