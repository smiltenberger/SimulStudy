
import { render } from '@testing-library/react';
import React, { Component,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Pages/Quiz/Quiz.js'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard';
import Preferences from './Pages/Preferences/Preferences';
import Register from './Pages/Register/Register.js'


function App() {
  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="preferences">
            <Preferences />
          </Route>
          <Route path="register">
            <Register />
          </Route>
          <Route path="login" element={<Login></Login>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
