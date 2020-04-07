import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    currentSearch: "",
    sortBy: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(resp => resp.json())
    .then(pokes => this.setState({
        pokemons: pokes
    }))
  }

  onChange = (event) => {
    this.setState({
      currentSearch: event.target.value
    })
  }

  filterPokemon = () => {
   if (this.state.currentSearch !== ""){
    return this.state.pokemons.filter(pokemon => pokemon.name.startsWith(this.state.currentSearch))
   } else {
    return this.state.pokemons
   } 
  }

  handleSubmit = (pokemon) => {
    fetch(`http://localhost:3000/pokemon`, {
    method: "POST",
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(pokemon)
    })
    .then(resp => resp.json())
    .then(newPoke => 
      this.setState({
        pokemons: [...this.state.pokemons, newPoke]
    }))
  }

  sortButton = () => {
    let filtered = this.filterPokemon()
    if (this.state.sortBy) {
      return [...filtered].sort((poke1, poke2) => {
        return poke1.name.localeCompare(poke2.name)
      })
    }
    return filtered
  }

  handleCheck = () => {
    this.setState({
      sortBy: !this.state.sortBy
    })
    console.log(this.state.sortBy)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onChange={this.onChange} currentSearch={this.state.currentSearch}/>
        <br />
        <input type="checkbox" checked={this.state.sortBy} onChange={this.handleCheck}/>
        <br />
        <PokemonCollection pokemons={this.sortButton()}/>
      </Container>
    )
  }
}

export default PokemonPage
