import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import './css/styles.scss';
import { products } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';

const App: React.FC = () => {
  const [itemsInCart, setItemsInCart] = useState<Array<{ id: number, count: number }>>([]);
  return (
    <Router>
      <div className="App">
        <Header cartItemCount = {itemsInCart.length}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:category" element={<Shop />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
