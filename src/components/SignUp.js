import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { ReactComponent as LogoCircleOnly } from "../assets/logos-full/logo-full-transparent.svg";

// Import Auth from '../utils/auth';

export default function SignIn({ setFormChoice }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [register, { error, data }] = useMutation(REGISTER_USER);

  // Navigates to new page
  const toLanding = () => {
    navigate("/dashboard");
  };

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // Registers user upon submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log("Line 36");
      Auth.login(data.register.token);
      console.log("Line 37");
      toLanding();
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }

    // Clear from values
    setFormState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex min-h-full object-fill">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {/* Logo */}
            <div className="flex justify-center">
              <LogoCircleOnly
                className="h-56 w-auto object-fill mb-14"
                alt="My Pets logo"
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Sign up to join our community of pet lovers:
            </h2>
            <p className="mt-2 text-sm">
              Or{" "}
              <a
                onClick={() => setFormChoice("signIn")}
                className="font-semibold hover:underline hover:text-blue hover:decoration-yellow hover:decoration-2 cursor-pointer"
              >
                sign in
              </a>
            </p>
          </div>

          <div className="mt-8">
            {/* Form */}
            <div className="mt-6">
              <form
                onSubmit={handleFormSubmit}
                action="#"
                method="POST"
                className="space-y-6"
              >
                {/* First Name Field */}
                <div>
                  <label
                    htmlFor="Firstname"
                    className="block text-sm font-medium "
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      autoComplete="firstName"
                      required
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Enter your first name"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Last Name Field */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium "
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      autoComplete="lastName"
                      required
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Enter your last name"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Username Field */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium "
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Choose a username"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Enter your email address"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Password Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium "
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Choose a password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Button */}
                <div className="">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-light-blue hover:drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-1"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/german-shepherd-dog-royalty-free-image-806942944-1560893738.jpg"
          alt="Happy Dog"
          // TODO: Aria-label for accessibility
        />
      </div>
    </div>
  );
}
