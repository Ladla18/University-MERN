import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
const Login = ({setisReg}) => {
  // Form handling for Registration
  const {
    register: registerRegisterForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm();

  const {
    register: registerLoginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  // Registration submit handler
  const handleRegister = async (data) => {
    console.log("Register Data:", data);
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        data
      );
      alert("signed sucess")
      setisReg("notlogin")
    } catch (error) {
      alert("error occured")
        console.error("Login.jsx", " :: Error ❌ : ", error);
    }

  };

  // Login submit handler
  const handleLogin =async (data) => {
    console.log("Login Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );
      alert("Logged in sucess")
       setisReg("notlogin");
    } catch (error) {
      alert("User Not Found ! Please Sign IN")
        console.error("Login.jsx", " :: Error ❌ : ", error);
    }
  };

  return (
    <div className="flex justify-center mt-16 gap-10">
      {/* Registration Form */}
      <div className="flex flex-col items-center gap-5 bg-slate-100 px-20 py-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold roboto-bold border-b px-10 text-start border-gray-400">
          Create an Account
        </h1>
        <form
          onSubmit={handleRegisterSubmit(handleRegister)}
          className="flex flex-col items-start w-full"
        >
          <label className="roboto-regular" htmlFor="username">
            Username:
          </label>
          <input
            className="border border-gray-300 rounded-sm p-2 w-full"
            type="text"
            {...registerRegisterForm("username", {
              required: "Username is required",
            })}
          />
          {registerErrors.username && (
            <p className="text-red-600">{registerErrors.username.message}</p>
          )}

          <label className="roboto-regular mt-4" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-gray-300 rounded-sm p-2 w-full"
            type="email"
            {...registerRegisterForm("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {registerErrors.email && (
            <p className="text-red-600">{registerErrors.email.message}</p>
          )}

          <label className="roboto-regular mt-4" htmlFor="password">
            Password:
          </label>
          <input
            className="border border-gray-300 rounded-sm p-2 w-full"
            type="password"
            {...registerRegisterForm("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {registerErrors.password && (
            <p className="text-red-600">{registerErrors.password.message}</p>
          )}

          <button className="bg-red-600 text-white roboto-bold p-2 mt-6 w-full">
            Register Now
          </button>
        </form>
      </div>

      {/* Login Form */}
      <div className="flex flex-col items-center gap-5 bg-blue-950 text-white px-20 py-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold roboto-bold border-b px-10 text-start border-gray-400">
          Login to your Account
        </h1>
        <form
          onSubmit={handleLoginSubmit(handleLogin)}
          className="flex flex-col items-start w-full"
        >
          <label className="roboto-regular" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-gray-300 rounded-sm p-2 w-full text-black"
            type="email"
            {...registerLoginForm("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {loginErrors.email && (
            <p className="text-red-600">{loginErrors.email.message}</p>
          )}

          <label className="roboto-regular mt-4" htmlFor="password">
            Password:
          </label>
          <input
            className="border border-gray-300 rounded-sm p-2 w-full text-black"
            type="password"
            {...registerLoginForm("password", {
              required: "Password is required",
            })}
          />
          {loginErrors.password && (
            <p className="text-red-600">{loginErrors.password.message}</p>
          )}

          <button className="bg-red-600 text-white roboto-bold p-2 mt-6 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
