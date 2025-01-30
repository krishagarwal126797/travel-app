import React, { useState } from "react";
import { db,auth,provider } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Card, CardContent, CardActions, Button, TextField, Typography, Switch } from "@mui/material";
import { styled } from "@mui/system";
import { FaGoogle } from "react-icons/fa";
import "./Register.css";

const ThemeToggle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "20px",
}));

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
    state: "", // New state field
  });

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { email, password, username, phoneNumber, city, state } = formData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        Username: username,
        Email: email,
        Password: password,
        Phone_number: Number(phoneNumber),
        City: city,
        State: state, // Save new state field
      });
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        Username: user.displayName,
        Email: user.email,
        Phone_number: user.phoneNumber || "",
        City: "",
        State: "", // Default empty for Google SignUp
      });
      alert("User registered with Google successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`register-container ${theme}`}>
      <ThemeToggle onClick={toggleTheme}>
        <Switch checked={theme === "dark"} />
        <Typography>{theme === "light" ? "Dark Mode" : "Light Mode"}</Typography>
      </ThemeToggle>
      <Card className={`register-card ${theme}`}>
        <CardContent>
          <Typography variant="h5" component="div" className="register-title">
            Create Your Account
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            {/* New State Input Field */}
            <TextField
              label="State"
              name="state"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleInputChange}
              required
            />
            <CardActions className="register-actions">
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
              <Button
                startIcon={<FaGoogle />}
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={handleGoogleSignUp}
              >
                Sign Up with Google
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
