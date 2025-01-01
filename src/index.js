import React from 'react';
import ReactDOM from 'react-dom/client';  // This is for React 18 concurrent rendering API
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Check if user is authenticated by verifying if data exists in localStorage
const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  console.log("Authenticated user:", user);  // Debugging
  return user !== null;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

// ReactDOM rendering for React 18 (concurrent rendering)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

// Alternatively, for older versions of React (before React 18), you can use:
// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route 
//         path="/home" 
//         element={
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         } 
//       />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
