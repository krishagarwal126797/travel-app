import React, { useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase"; // Ensure you import Firestore DB instance
import { Firestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, where, getDocs } from "firebase/firestore"; // Add this import

import "./Login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Query Firestore for admin data by email
      const adminData = await fetchAdminCollection(user.email);
      if (adminData) {
        localStorage.setItem("admin", JSON.stringify({ uid: user.uid, email: user.email }));
        toast.success("Admin logged in successfully!");
        navigate("/admin/dashboard");
      } else {
        throw new Error("Access denied: Not an admin.");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      toast.error(error.message || "Login failed. Please check your credentials.");
    }
  };
  
  

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Validate if the logged-in user is an admin
      const isAdmin = await fetchAdminCollection(user.uid);
      if (isAdmin) {
        localStorage.setItem("admin", JSON.stringify({ uid: user.uid, email: user.email }));
        toast.success("Admin logged in with Google successfully!");
        navigate("/admin/dashboard");
      } else {
        throw new Error("Access denied: Not an admin.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to fetch admin data from Firestore
 // Updated Firestore Function
 const fetchAdminCollection = async (email) => {
  try {
    const adminQuery = query(
      collection(db, "admin"),
      where("email", "==", email) // Query by email
    );
    const querySnapshot = await getDocs(adminQuery);

    if (!querySnapshot.empty) {
      // Admin data exists
      const adminData = querySnapshot.docs[0].data();
      console.log("Admin document found:", adminData);
      return adminData;
    } else {
      console.warn("Admin access denied. Email not found in admin collection.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching admin data:", error.message);
    throw new Error("Error validating admin access.");
  }
};
  

  return (
    <section className="Login">
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <div className="image-overlay">
            <div className="centered-text">
              <span className="welcome-text">Admin Portal</span>
            </div>
            <p className="lorem-text">
              Welcome to the Admin Portal – Log in to manage the platform!
            </p>
          </div>
        </div>
        <div className="login-form position-relative">
          <span className="position-absolute h3 top-0 end-0 pe-4">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <h3>Admin Login</h3>
          <div className="input-group mb-3">
            <input
              type="email"
              placeholder="Enter your admin email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input-group mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <div className="input-group-append">
              <span
                className="input-group-text"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <button className="btn btn-primary w-100 mb-3" onClick={handleAdminLogin}>
            Admin Login
          </button>
          <button
            className="btn btn-outline-danger w-100 mb-3"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
          <p className="text-end w-100">
            <span
              className="hover-effect"
              style={{ cursor: "pointer", color: "#007bff" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot your password?
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
    </section>
  );
};

export default AdminLogin;
