import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Pages/Quiz/Quiz.js";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Preferences from "./Pages/Preferences/Preferences";
import Register from "./Pages/Register/Register.js";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}
function App() {
  // const [token, setToken] = getToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
