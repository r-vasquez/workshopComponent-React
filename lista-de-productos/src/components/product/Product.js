import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      votos: 0
    };

    // Se hace el bind para usar this en la funcion handleVoteUp y handleVoteDown
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown = this.handleVoteDown.bind(this);
  }

  handleVoteUp() {
    this.setState(
      {
        votos: this.state.votos + 1
      },
      // Usamos callback para manejar la asincronia de setState (TODO: es necesario?)
      () => {
        this.props.onVote(this.props.id, this.state.votos);
      }
    );
  }

  handleVoteDown() {
    this.setState(
      {
        votos: this.state.votos - 1
      },
      // Usamos callback para manejar la asincronia de setState (TODO: es necesario?)
      () => {
        this.props.onVote(this.props.id, this.state.votos);
      }
    );
  }

  render() {
    // Utilizamos SemanticUI y Bootstrap para los estilos

    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} alt='imagePlaceHolder' />
        </div>
        <div className='middle aligned content'>
          {/* Acá manejamos los votos */}
          <div className='header'>
            <a onClick={this.handleVoteUp}>
              <i className='large caret up icon' />
            </a>
            <a onClick={this.handleVoteDown}>
              <i className='large caret down icon' />
            </a>
            {this.state.votos}
          </div>
          <div className='description'>
            <h4>
              <b>{this.props.title}</b>
            </h4>
            <h5>{this.props.description}</h5>
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
