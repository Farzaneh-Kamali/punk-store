import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './component/Home';
import { Cart } from './component/Cart';
import { Favorite } from './component/Favorite';
import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar/Navbar';

function App() {
  return (
    <div className="background-image">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
