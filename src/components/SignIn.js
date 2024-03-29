// ! Imports
// React
import React, { useState } from "react";
// Router
import { Link, useNavigate } from "react-router-dom";
// Apollo
import { useMutation } from "@apollo/client";
// Utils
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
// Images
import { ReactComponent as LogoCircleOnly } from "../assets/logos-full/logo-full-transparent.svg";


// ! Function
export default function SignIn({ setFormChoice }) {
  
  // * Navigation
  const navigate = useNavigate();
    // Navigates to new page
    const toLanding = () => {
      navigate("/dashboard");
    };

  // * Form
  // Clears form 
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

    // Update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({ ...formState, [name]: value });
    };
  

  // User login upon submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      toLanding();
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }

    //Clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  // ** RETURN **
  return (
    <div className="flex min-h-full object-fill">
      <div className="flex flex-1 flex-col justify-center mb-28 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="flex justify-center">
          <LogoCircleOnly
            className="h-80 w-auto object-fill mb-14"
            alt="My Pets logo"
            aria-label="My Pets logo: sillhouettes of a dog, cat, bird, and heart, cradled by a yellow hand, encircled by a yellow border."
          />
        </div>
        <div className=" mx-auto w-full max-w-sm lg:w-96">
          <div className="">
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Sign in to your account:
            </h2>
            <p className="mt-2 text-sm">
              Or{" "}
              <a
                onClick={() => setFormChoice("signUp")}
                className="font-bold underline decoration-yellow decoration-2 hover:text-blue cursor-pointer"
              >
                sign up
              </a>
            </p>
          </div>
          {/* Form */}
          <div className="mt-8">
            <div className="mt-6">
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={handleFormSubmit}
              >
                {/* Username field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Enter your username"
                      id="username"
                      name="username"
                      type="username"
                      value={formState.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Password field */}
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full appearance-none rounded-md border border-black px-3 py-2 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-green sm:text-sm"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Remember me + password */}
                {/* TODO: Update styling if we're going to use these elements */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold hover:text-blue hover:underline hover:decoration-yellow hover:decoration-2"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-light-blue hover:drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-1"
                  >
                    Sign in
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
