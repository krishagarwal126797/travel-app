import React from 'react';
import ReactDOM from 'react-dom/client';  // This is for React 18 concurrent rendering API
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Sidebar from './views/sidebar';
import Blog from './views/blog/Blog';
import Contact from './views/contact/ContactUs';
import Footer from './views/footer';
import CreateTour from './views/create tour/CreateTour';
import DestinationsPage from './views/destination_page/desination';
import DestinationDetailsPage from './views/destination_page/destination_details';
import TourListing from './views/create tour/tour_listing';
import ProfileCard from './views/profile card/ProfileCard';
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
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/createtour" element={<CreateTour />} />
      <Route path="/destination" element={<DestinationsPage />} />
      <Route path="/destdetails" element={<DestinationDetailsPage />} />
      <Route path="/tourlist" element={<TourListing />} />
      <Route path="/profilecard" element={<ProfileCard />} />
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
