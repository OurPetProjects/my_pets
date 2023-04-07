import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"


// import Auth from '../utils/auth';

export default function Launch() {
  const navigate = useNavigate();
  // set initial signin state
  const [formChoice, setFormChoice] = useState("signIn")

  // set initial form state
  const [userFormData, setUserFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  function displayComponent() {
    switch (formChoice) {
      case "signIn":
        return <SignIn setFormChoice={setFormChoice} />;
      case "signUp":
        return <SignUp setFormChoice={setFormChoice} />;
      default:
        return  <SignIn setFormChoice={setFormChoice} />
    }
  }

  return (
      <div className="h-full object-fill">
        {displayComponent()}
      </div>
  )
}
