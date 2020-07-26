import React from 'react';
import './App.css';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className='App'>
      <h1>Lista de Productos</h1>
      <ProductList />
    </div>
  );
}

export default App;
