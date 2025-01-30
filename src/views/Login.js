import React, { useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));
      toast.success("Logged in successfully!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));
      toast.success("Logged in with Google successfully!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="Login">
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <div className="image-overlay">
            <div className="centered-text">
              <span className="welcome-text">Welcome to Travel Tinder</span>
            </div>
            <p className="lorem-text">
              Welcome to Tour – may your journey be safe. Log in to get started!
            </p>
          </div>
        </div>
        <div className="login-form position-relative">
          <span className="position-absolute h3 top-0 end-0 pe-4">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <h3>Login</h3>
          <div className="input-group mb-3">
            <input
              type="email"
              placeholder="Enter your email"
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
          <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
            Login
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

export default Login;
