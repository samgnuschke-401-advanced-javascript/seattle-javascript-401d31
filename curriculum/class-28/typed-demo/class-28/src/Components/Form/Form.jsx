import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.pokemon.name,
    };
  }

  handleChange = event => {
    // Vinicio - here we are changing UI state - 1
    this.setState({
      name: event.target.value,
    }, () => {
      // this.props.handlePokemonNameChange({
      //   name: this.state.name,
      //   url: this.props.pokemon.url,
      // });
    });
  };

  handleSubmit= event => {
    event.preventDefault();
    this.props.handlePokemonNameChange({
      name: this.state.name,
      url: this.props.pokemon.url,
    });
  };

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit"> Change {this.props.pokemon.name} name</button>
        </form>
      </>
    );
  }
}