import React from 'react';
import { Navigate } from 'react-router-dom';
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
import TermsOfServicePage from './views/privacy/termsofservice';
import PrivacyPolicyPage from './views/privacy/privacy';
import Testimonials from './views/testimonial/testimonial';
import Pricing from './views/pricing/Pricing';
import MyTour from './views/profile card/MyTour';
import SaveDestinations from './views/profile card/SaveDestinations';
import Settings from './views/profile card/Settings';
import TourDetailsPage from './views/create tour/tourdetails';
import ReviewsPage from './views/review';
import Reviewsform from './views/reviewform';
import AdminLogin from './views/AdminLogin';
import BlogPostPage from './views/blog/blogpost';
import HowItWorks from './views/How_itsWorking/itsWorking';
import CreateBlog from './views/blog/createblog';
import about from './views/blog/createblog';
import AboutUs from './views/about/about';
// Check if user is authenticated
const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  console.log('Authenticated user:', user); // Debugging
  return user !== null;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

// Define application routes
const routes = [
  // Protected Routes
  { path: '/home', component: Home, protected: true },
  { path: '/createtour', component: CreateTour, protected: true },
  { path: '/destination', component: DestinationsPage, protected: true },
  { path: '/destdetails', component: DestinationDetailsPage, protected: true },
  { path: '/tourlist', component: TourListing, protected: true },
  { path: '/profilecard', component: ProfileCard, protected: true },
  { path: '/mytour', component: MyTour, protected: true },
  { path: '/SaveDestination', component: SaveDestinations, protected: true },
  { path: '/settings', component: Settings, protected: true },
  { path: '/tourdetails', component: TourDetailsPage, protected: true },
 

  
  // Public Routes
  { path: '/admin/login', component: AdminLogin},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/sidebar', component: Sidebar },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
  { path: '/footer', component: Footer },
  { path: '/privacy', component: PrivacyPolicyPage },
  { path: '/terms', component: TermsOfServicePage },
  { path: '/pricing', component: Pricing },
  { path: '/testimonial', component: Testimonials },
  { path: '/review', component: ReviewsPage },
  { path: '/reviewform', component: Reviewsform },
  { path: '/How_itsWorking', component: HowItWorks },
  { path: '/blogpost', component: BlogPostPage },
  { path: '/blogcreate', component: CreateBlog },
  { path: '/about', component: AboutUs },
];

export default routes;
export { ProtectedRoute };
