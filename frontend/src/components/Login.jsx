import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center mt-16 gap-10">
      <div className="flex flex-col items-center gap-5 bg-slate-100 px-20 py-10">
        <h1 className="text-2xl font-bold roboto-bold border-b px-10 text-start border-gray-400">
          Create an Account
        </h1>
        <form action="" className="flex flex-col item-center ">
          <label className="roboto-regular " for="username">
            Username:
          </label>
          <input
            className="border border-frey rounded-sm p-2 "
            type="text"
            name="name"
            id="name"
          />
          <br />
          <br />
          <label className="roboto-regular " for="email">
            Email:
          </label>
          <input
            className="border border-frey rounded-sm p-2 "
            type="email"
            name="email"
            id="email"
          />
          <br />
          <br />
          <label className="roboto-regular " for="password">
            Password:
          </label>
          <input
            className="border border-frey rounded-sm p-2 "
            type="password"
            name="password"
            id="password"
          />
          <br />
          <br />
          <button className="bg-red-600 text-white roboto-bold p-2 ">
            Register Now
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center gap-5 bg-blue-950 text-white px-20 py-10">
        <h1 className="text-2xl font-bold roboto-bold border-b px-10 text-start border-gray-400">
          Login to your Account
        </h1>
        <form action="" className="flex flex-col item-center ">
         
          <label className="roboto-regular " for="email">
            Email:
          </label>
          <input
            className="border border-frey rounded-sm p-2 "
            type="email"
            name="email"
            id="email"
          />
          <br />
          <br />
          <label className="roboto-regular " for="password">
            Password:
          </label>
          <input
            className="border border-frey rounded-sm p-2 "
            type="password"
            name="password"
            id="password"
          />
          <br />
          <br />
          <button className="bg-red-600 text-white roboto-bold p-2 ">
            Login 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login