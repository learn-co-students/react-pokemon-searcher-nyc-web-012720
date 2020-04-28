import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    displayPokemons: [],
    searched: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemons: data,
        displayPokemons: data,
        searched: data
      })
    })
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    let searchedPokemon = this.state.pokemons.filter((p) => p.name.includes(event.target.value))
    this.setState({
      searched: searchedPokemon
    })
  }
  postPokemon = (pokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json",

      },
      body: JSON.stringify ({
        name: pokemon.name,
        state: [
          {
            value: pokemon.hp,
            name: "hp,"
          },
        ],
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl
        },
      }),
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon],
        searched: [...this.state.searched, newPokemon]
      })
    })

  }
  render() {
    console.log("test1:", this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection  pokemons={this.state.searched}/>
      </Container>
    )
  }
}

export default PokemonPage
