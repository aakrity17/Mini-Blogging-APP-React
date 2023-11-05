import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Create from './pages/Create';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
