import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';
const pokemonURL = ' http://localhost:4000/pokemon';
class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: '',
  };
  componentDidMount() {
    fetch(pokemonURL)
      .then((response) => response.json())
      .then((pokemons) => this.setState({ pokemons }));
  }
  handleSubmit = (event, data) => {
    event.preventDefault();
    fetch(pokemonURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => this.setState({ pokemons: [...this.state.pokemons, data] }));
  };
  onChange = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search onChange={this.onChange} value={this.state.search} />
        <br />
        <PokemonCollection
          pokemons={this.state.pokemons}
          search={this.state.search}
        />
      </Container>
    );
  }
}

export default PokemonPage;
