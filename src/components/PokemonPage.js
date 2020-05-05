import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

componentDidMount(){
  fetch(API)
  .then(response => response.json())
  .then(pokemons => {
    this.setState({
      pokemons: pokemons, 
      displayedPokemons: pokemons
    })
  })
}

handleSearch= (event) => {
  this.setState({
    searchTerm: event.target.value
  })
}

addPokemon = (pokemon) => {
  this.setState({
    pokemons: [...this.state.pokemons, pokemon]
  })
}

  render() {
    let displayedPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokempon}/>
        <br />
        <Search searchTearm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={displayedPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
