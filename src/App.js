import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />



    </Routes>
    <br />

    {/* <Home />
    <hr /> */}

    {/* <Login /> */}
    {/* <hr /> */}

    {/* <Signup /> */}
    {/* <hr /> */}

    {/* <Blog /> */}
    {/* <hr /> */}

    {/* <Contact /> */}
    {/* <hr /> */}

    {/* <About /> */}
    {/* <hr /> */}
  </>
  );
}

export default App;
