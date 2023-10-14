import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <>
      <h1>
      <img className='logo' src='logo.jpg' alt='Logo image'/>
        FoodiStudio</h1>
      {/* <Home /> */}
      <Login />
      {/* <Signup />
      <Blog />
      <Contact />
      <About /> */}
    </>
  );
}

export default App;
