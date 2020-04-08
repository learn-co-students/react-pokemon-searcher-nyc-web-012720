import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    search: "",
    addPokemon: {},
    sort: "",
    filter: "None"
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res=>res.json())
    .then(pokemons=>{
      this.setState({pokemons})
    })
  }

  //handle sort change
  handleSortChange = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  //search bar
  onChange = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  //filter by search
  searchPokemons = () => {
    let pokemons = this.state.pokemons
    if (this.state.search !== ""){
      return pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    } else {return pokemons}
  }

  //findHp
  findHp = (pokemon) => {
    let hpStat = pokemon.stats.find(stat => stat.name === "hp")
    return hpStat.value
  }

  sortPokemons = () => {
    let search = this.searchPokemons()
    if (this.state.sort === "alphabetically"){
      return[...search].sort((a,b)=> a.name.localeCompare(b.name))
    } if(this.state.sort === "hp"){
      return[...search].sort((a,b)=> this.findHp(a) - this.findHp(b))
    } else return search
  }

  filterPokemons = () => {
    let sorted = this.sortPokemons()
    if (this.state.filter === "Height"){
      return[...sorted].sort((a,b)=> a.height - b.height)
    }
    if (this.state.filter === "Weight"){
      return[...sorted].sort((a,b)=>a.weight - b.weight)
    } else return sorted
  }

  //add new Pokemon to state
  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }
 

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search 
          onChange={this.onChange} 
          handleSortChange={this.handleSortChange} 
          sort={this.state.sort}
          handleFilterChange={this.handleFilterChange}
          filter={this.state.filter}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} findHp={this.findHp}/>
      </Container>
    )
  }
}

export default PokemonPage
