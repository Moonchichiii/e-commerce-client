import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, authenticationPath }) => {
  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;