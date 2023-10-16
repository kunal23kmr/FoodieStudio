import React,{useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

function App() {
  const [user, setUser] = useState(0);
  const navigate = useNavigate();

  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile isLog={user} na={navigate} />} />
      <Route path='/viewprofile' element={<ViewProfile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  </>
  );
}

export default App;
