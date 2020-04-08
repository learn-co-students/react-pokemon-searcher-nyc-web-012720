import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchPokemon: "",
    newPokemon: {},
    sortPokemon: "",
    filterType: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons}))
  }

  onSearchChange = event => {
    this.setState({searchPokemon: event.target.value})
  }

  handleNewPokemon = newPokemon => {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon]})
  }

  handleSort = event => {
    this.setState({sortPokemon: event.target.value})
  }

  handleFilter = event => {
    this.setState({ filterType: event.target.value })
  }

  findHp = (pokemon) => {
    let hp = pokemon.stats.filter( stats => {
      return stats.name === "hp" && stats.value
    })
    return hp[0].value
  }

  findPokemons = () => {
    const list = this.state.pokemons
    if (this.state.searchPokemon !== "") {
      return list.filter(pokemon => pokemon.name.includes(this.state.searchPokemon))
    } else {
      return list
    }
  }

  sortedList = () => {
    let list = this.findPokemons()
    if (this.state.sortPokemon === "name"){ 
      return [...list].sort((a, b) => a.name.localeCompare(b.name))
    } if( this.state.sortPokemon === "hp"){
      return[...list].sort((a,b) => this.findHp(b) - this.findHp(a))
    } else {
      return list
    }
  }

  // filteredList = () => {
  //   const sortedList = this.sortedList()
  //   if (this.state.filterType !== ""){
  //     let please = sortedList.filter( pokemon => this.pokemonTypes(pokemon.types))
  //     return sortedList
  //   } else {
  //     return sortedList
  //   }
  // }
    
  // pokemonTypes = types => {
  //   console.log("inside pokemonTypes", types)
  //   types.filter( type => console.log(type))
  // }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
        <br />
        <Search 
          onSearchChange={this.onSearchChange} 
          handleSort={this.handleSort}
          sortPokemon={this.state.sortPokemon}
          handleFilter={this.handleFilter}
        />
        <br />
        <PokemonCollection pokemons={this.sortedList()} findHp={this.findHp} />
      </Container>
    )
  }
}

export default PokemonPage
