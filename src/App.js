// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <>
        <Nav/>
        <Main/>
      </>
    </Router>
  );
}

export default App;
