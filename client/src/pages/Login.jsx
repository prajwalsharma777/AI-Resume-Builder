import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center h-screen items-center">
      <form className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please Sign In to continue</p>
        {/* state is === Sign Up  */}
        {state !== "login" && (
          <div>
            <input
              value={formData.name}
              type="text"
              name="name"
              placeholder="Name"
              className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2"
              required
            />
          </div>
        )}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            value={formData.email}
            type="email"
            name="email"
            placeholder="Email ID"
            className="border-none outline-none ring-0"
            required
          />
        </div>
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            value={formData.name}
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            required
          />
        </div>
        <div className="mt-4 text-left text-indigo-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          Login
        </button>
        <p className="text-gray-600 text-sm mt-3 mb-11">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            click here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
