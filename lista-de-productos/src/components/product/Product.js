import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} alt='imagePlaceHolder' />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            aqui vienenlos votos
          </div>

          <div className='description'>
            <h2>
              <b>{this.props.title}</b>
            </h2>
            <h3>{this.props.description}</h3>
          </div>
          <div className='extra'>
            <span>Vende:</span>
            <img className='ui avatar image' src={this.props.submitterAvatarUrl} alt='avatar' />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

// const { name, description, imgProduct, vendor, imgVendor, voto } = props; //destructuring
