import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
 // Customer routes
import adminRoutes from './adminRoutes'; // Admin routes
import AdminRoute from './AdminRoute'; // Admin route protection
import routes, { ProtectedRoute } from './routes';// Customer route protection
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* Customer Routes */}
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.protected ? (
              <ProtectedRoute>
                <route.component />
              </ProtectedRoute>
            ) : (
              <route.component />
            )
          }
        />
      ))}

      {/* Admin Routes */}
      {adminRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);
