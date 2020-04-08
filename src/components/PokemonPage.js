import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    displayPokemons: [],
    searchValue: ""
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons=> this.getPokemons(pokemons))
  }

  getPokemons = (pokemons) => {
    this.setState({pokemons: pokemons,
    displayPokemons: pokemons})
  }

  handleSearch = (event) => {
    // let foundPokemon = this.state.pokemons.filter(pokemon=> pokemon.name.includes(this.state.searchValue))
    this.setState({
    searchValue: event.target.value})
  }

  addPokemon = (pokemon) => {
    this.setState((prevState)=>  ({...prevState.pokemons, pokemon}))
  }
  render() {
    console.log(this.state.searchValue)
    let pokemonToFind = this.state.pokemons.filter(pokemon=> pokemon.name.includes(this.state.searchValue))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchValue={this.state.searchValue} handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={pokemonToFind} />
      </Container>
    )
  }
}

export default PokemonPage
