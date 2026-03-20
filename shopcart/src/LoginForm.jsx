import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email");
      return;
    }

    onLogin(name, "");
  };

  return (
    <form onSubmit={handleSubmit} className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="m-2">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="submit"
        value="Login"
        className="btn bg-success text-white my-3"
      />
    </form>
  );
}

export default LoginForm;