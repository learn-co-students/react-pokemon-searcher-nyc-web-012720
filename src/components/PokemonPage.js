import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [], 
    displayPokemons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(data => this.setState({
        pokemons: data, 
        displayPokemons: data
    }))
  }

  handleSearch = (event) => {
    let searchTerm = event.target.value
    let searchMatch = this.state.displayPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    this.setState({
      displayPokemons: searchMatch 
    })
  }

  addPokemon = (newPokemon) => {
    this.setState(prevState => ({
      pokemons: [...prevState, newPokemon]
    }))
  }

  render() {
    // console.log(this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.displayPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
