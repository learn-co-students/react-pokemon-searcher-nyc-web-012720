import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemons: pokemons, displayPokemons: pokemons}))
  }

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  addPokemon = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    let displayPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
        <br />
        <PokemonCollection pokemons={displayPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
