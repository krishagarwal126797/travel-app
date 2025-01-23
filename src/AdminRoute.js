// AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAdminAuthenticated = () => {
  const admin = localStorage.getItem('admin');
  return admin !== null;
};

const AdminRoute = ({ children }) => {
  return isAdminAuthenticated() ? children : <Navigate to="/admin/login" />;
};

export default AdminRoute;
