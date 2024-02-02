// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <>
        <Nav/>
        <Main/>
        <Menu/>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
