import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      const userData = result.user;
      setUser(userData);
      console.log(userData);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  // Handle submit for email/password sign-in (not Google)
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful!");
      const userData = result.user;
      setUser(userData);
      console.log(userData);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };


  // Sign out from the application
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin")
    setUser(null);
  };

  return (
    <div className="sign-in">
      <h2>I already have an Account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={handleGoogleSignIn} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
