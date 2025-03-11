import { useState } from "react";
import { auth, createUserProfileDocument, createUserWithEmailAndPassword } from "../firebase/firebase";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import "./SignUp.css";


export default function SignUp() {
  const [state,setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword} = state;
    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await createUserProfileDocument(user, {displayName})
      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }
  const handleChange = (e) => {
     const {value, name} = e.target;
     setState((prevState) => ({ ...prevState, [name]: value }));
  }
  const { displayName, email, password, confirmPassword} = state;
  return (
    <div className="sign-up">
      <h2 className="title">I  do not have an Account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          placeholder="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}
