import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
       const data = await axios.post('http://localhost:3000/auth/signup',{

        roleId : "a6ca5409-ef59-4bd1-a921-a1ca0ddb9967",
        name,
        email,
        password,
       
       })
       if(data){
        navigate('/login')
       }
    } catch (error) {
      console.error(error)
      
    }
  }
  return (
    <div>
       <>


{/*
  This example requires updating your template:

  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```
*/}
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-lg ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
    <img
      className="mx-auto h-30 w-20"
      src="https://t3.ftcdn.net/jpg/02/41/39/06/360_F_241390620_hihddCG15N7I8HyPWUiv1eUH85D2SN9z.jpg"
      alt="Your Company"
    />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign Up to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6  "  onSubmit={handleSubmit}  >
    <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="mt-2">
          <input  onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            type='text'
           
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input   onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div> */}
        </div>
        <div className="mt-2">
          <input   onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
       Have an account?{' '}
      <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
       Sign in
      </Link>
    </p>
  </div>
</div>
</>
    </div>
  )
}

export default Signup