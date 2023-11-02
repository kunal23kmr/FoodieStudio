import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';

import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ViewProfile from './components/ViewProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleBlog from './components/SingleBlog';
import CheckOut from './components/CheckOut';
import Cart from './components/Cart';

function App() {

  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
      <Route path='/viewProfile/:id' element={<ViewProfile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/singleBlog/:id' element={<SingleBlog />} />
      <Route path='/checkOut/:id/:price' element={<CheckOut />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </>
  );
}

export default App;
