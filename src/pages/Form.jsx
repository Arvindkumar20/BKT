import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="flex items-center justify-center md:w-1/3 w-full mx-auto mt-[8%]">
      <form
        action=""
        className="flex flex-col items-center justify-center rounded-md py-10 px-5   gap-5  shadow-md bg-gray-50 w-full"
      >
        <h1 className=" text-xl font-bold text-center mb-5 text-black">
          Sign Up Page
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name ..."
          className="py-3 w-full px-1 outline-none border rounded"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your name ..."
          className="py-3 w-full px-1 outline-none border rounded"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your name ..."
          className="py-3 w-full px-1 outline-none border rounded"
          onChange={handlePasswordChange}
          value={password}
        />
        <button className="bg-blue-500 w-1/2 py-3 rounded-md">SignUp</button>
      </form>
    </div>
  );
}
