import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  const [formstate, setFormState] = useState({});
  const handleChange = (e) => {
    setFormState({
      ...formstate,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formstate);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/auth/signUp",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formstate)
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Username" className="border p-3 rounded-lg" id="username" onChange={handleChange}
        />
        <input
          type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange}
        />
        <input
          type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignOut;
