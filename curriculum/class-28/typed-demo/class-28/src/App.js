import Form from './Components/Form/Form';
import React from 'react';
import superagent from 'superagent';

class App extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // Vinicio - this line in here is my applicationState
      pokemon: [],
    };
  }

  // This should be an object with {name: 'string', url: 'string'}
  handleNameChange = (pokemonWithNewName) => {
    // Vinicio - here I have access to the APPLICATION STATE
    // Vinicio - here, we are changing application state - 2
    this.setState(previousState => {
      return {
        pokemon: previousState.pokemon.map(
          pokemon => pokemonWithNewName.url === pokemon.url ?
            pokemonWithNewName : pokemon
        )
      };
    });
  };

  componentDidMount() {
    return superagent.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        // Vinicio - Here, I want to set my application state
        this.setState({
          pokemon: response.body.results,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.pokemon.map(pokemon =>
              <li>
                <a href={pokemon.url}>{pokemon.name}</a>

                {/*Vinicio - here, we are sending props down to Form - 3*/}
                <Form
                  pokemon={pokemon}
                  handlePokemonNameChange={this.handleNameChange}
                />
              </li> )
          }
        </ul>
      </>
    );
  }
}

export default App;
