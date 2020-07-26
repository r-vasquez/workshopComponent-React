import React from 'react';
import { products } from '../../const';
import Product from '../product/Product';

/*
Se recorre el array products
y se va llenando la lista de products
*/

class ProductList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='ui unstackable items'>
        {products.map(elem => {
          return <Product {...elem} />;
        })}
      </div>
    );
  }
}

export default ProductList;
