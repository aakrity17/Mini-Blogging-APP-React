import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Create from './pages/Create/Index';
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
// import Register from '../../components/Register/Register';


const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* <Route path='/register' element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default App;
