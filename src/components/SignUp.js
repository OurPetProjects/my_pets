import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { ReactComponent as LogoCircleOnly } from '../assets/logos-full/logo-full-transparent.svg'


// Import Auth from '../utils/auth';

export default function SignIn({setFormChoice}) {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({firstName:'', lastName:'', username:'', email:'', password: ''})
  const [register, {error, data}] = useMutation(REGISTER_USER)

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target

    console.log(name + value)

    setFormState({...formState, [name]: value})
  }

  // Registers user upon submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await register({
        variables: { ...formState },
      })

      Auth.register(data.register.token)
    } catch (err) {
      console.error(JSON.stringify(err,null,2))
    }

    // Clear from values
    setFormState({
      firstName:'',
      lastName:'', username:'',email:'', password: ''
    })
  }
  return (
      <div className="flex min-h-full object-fill">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
            <div className='flex justify-center'>
              <LogoCircleOnly 
               className="h-56 w-auto object-fill mb-14"
               alt="My Pets logo"
              />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign up to join our community of pet lovers</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <a onClick={() => setFormChoice("signIn")} className="font-medium text-indigo-600 hover:text-indigo-500">
                  sign in
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleFormSubmit}action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="Firstname" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        name="firstName"
                        type="firstName"
                        autoComplete="firstName"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formState.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="lastName"
                        autoComplete="lastName"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formState.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formState.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/german-shepherd-dog-royalty-free-image-806942944-1560893738.jpg"
            alt="Happy Dog"
          />
        </div>
      </div>
  )
}