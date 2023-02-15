import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import products from "./products.json"
import Product from './components/Product';
import Basket from './components/Basket';

function App() {
  const [money, setMoney] = useState(100000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [basket])

  return (
    <div>
      <Header total={total} money={money} />
      <div className='container products'>
        {products.map(product => (
          <Product key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money} />
        ))}
      </div>
      {
        total > 0 && (
          <Basket basket={basket} setBasket={setBasket} products={products} total={total} />
        )
      }
    </div>
  );
}

export default App;
