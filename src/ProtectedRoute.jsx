import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isSignIn } from './States/userSlice';

const ProtectedRoute = ({
  user,
  redirectPath = '/login',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;