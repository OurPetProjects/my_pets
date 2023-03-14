import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { ReactComponent as LogoCircleOnly } from '../assets/logos-full/logo-full-transparent.svg'

// import Auth from '../utils/auth';

export default function SignIn({setFormChoice}) {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({username:'', password: ''})
  const [login, {error, data}] = useMutation(LOGIN_USER)

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target

    console.log(name + value)

    setFormState({...formState, [name]: value})
  }

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await login({
        variables: { ...formState },
      })

      Auth.login(data.login.token);
      // navigate()
    } catch (err) {
      console.error(JSON.stringify(err,null,2))
    }

    //Clear form values
    setFormState({
      username: '',
      password: '',
    })
    }
  return (
      <div className="flex min-h-full object-fill">
        <div className="flex flex-1 flex-col justify-center mb-28 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className='flex justify-center'>
        <LogoCircleOnly 
               className="h-80 w-auto object-fill mb-14"
               alt="My Pets logo"
              />
              </div>
          <div className=" mx-auto w-full max-w-sm lg:w-96">

            <div className=''>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <a onClick={() => setFormChoice("signUp")} className="font-medium text-indigo-600 hover:text-indigo-500">
                  sign up
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your username address"
                        id="username"
                        name="username"
                        type="username"
                        value={formState.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
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