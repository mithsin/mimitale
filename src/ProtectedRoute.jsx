import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isSignIn } from './States/userSlice';

const ProtectedRoute = ({
  redirectPath = '/login',
  children,
}) => {
  // const userSignIn = useSelector(isSignIn);
  const userSignIn = true;

  if (!userSignIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;