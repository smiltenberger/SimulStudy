import React from 'react';
import './Register.css';

export default function Register() {
  return(
    <div className="login-wrapper">
      <h1>Please Register</h1>
      <form>
      <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>First Name</p>
          <input type="text" />
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" />
        </label>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}