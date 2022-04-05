
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Quiz from './Pages/Quiz/Quiz.js'

class App extends React.Component {
  render() {
    return (
      <div>
       <Quiz/>
      </div>
    );
  }
}
export default App;
