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
    this.state = {
      change: false
    };
    this.handleVotes = this.handleVotes.bind(this);
  }

  handleVotes(id, numVotos) {
    products.find(elem => elem.id === id).votes = numVotos;

    // Se hace esto para forzar el cambio de componente
    // y permitir re-renderizar.

    this.setState({
      change: !this.state.change
    });
  }

  render() {
    // Separamos la lista de componentes en una variable
    const productComponents = products
      .sort((a, b) => b.votes - a.votes)
      .map(elem => {
        return <Product {...elem} onVote={this.handleVotes} key={elem.id} />;
      });

    // Hacemos wrap de mi lista para que se pueda ver bien (semantic UI)
    return <div className='ui unstackable items'>{productComponents}</div>;
  }
}

export default ProductList;
