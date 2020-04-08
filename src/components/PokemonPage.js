import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemons: [],
    search: "",
    searchBy: "name"
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemons => this.setState({pokemons}, () => console.log(this.state)))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  addPokemon = pokemonObject => {
    this.setState(prevState => ({
      pokemons: [...prevState.pokemons, pokemonObject]
    }))
  }

  handleRadioChange = (event, value) => {
    this.setState({
      searchBy: value.value
    })
  }

  deleteMistake = () => {
    fetch('http://localhost:3000/pokemon/207', {
      method: 'DELETE'
    })
  }

  render() {
    let pokemonsCopy = [...this.state.pokemons]
    if (this.state.searchBy === "name") {
      pokemonsCopy = pokemonsCopy.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search))
    }
    if (this.state.searchBy === "type") {
      pokemonsCopy = pokemonsCopy.filter(pokemon => (
        pokemon.types.some(type => type.includes(this.state.search))
      ))}
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleChange} value={this.state.search} searchBy={this.state.searchBy} handleRadioChange={this.handleRadioChange}/>
        <br />
        <PokemonCollection pokemons={pokemonsCopy}/>
      </Container>
    )
  }
}

export default PokemonPage
