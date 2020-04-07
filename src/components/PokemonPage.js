import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemons: [],
      displayPokemons: [],
      searchPoke: "",
      newId: 208
    }
    this.pokeUrl = 'http://localhost:3000/pokemon';
  }

  componentDidMount() {
    fetch(this.pokeUrl)
      .then(res => res.json())
      .then(pokemons => this.setState({pokemons, displayPokemons:pokemons}))
      .catch(err => console.log(err))
  }

  handleChange = (value) => {
    this.setState(() => {
      const searchPoke = value;
      const displayPokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchPoke) >= 0);
      console.log(displayPokemons)
      return {searchPoke, displayPokemons}
    })
  }

  addPokemon = (event, pokemon) => {
    event.preventDefault();
    ;
    const postObj = {
      'method': 'POST',
      'headers': {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'id': this.state.newId,
        'name':pokemon.name, 
        'stats': [{},{},{},{},{},{'value':pokemon.hp}],
        'sprites': {'front': pokemon.frontUrl, 'back': pokemon.backUrl}
      })
    };

    fetch(this.pokeUrl, postObj)
      .then(res => res.json())
      .then(newPoke => {
        this.setState({
          pokemons:[
            ...this.state.pokemons,
            newPoke
          ],
          displayPokemons: [
            ...this.state.pokemons,
            newPoke
          ],
          newId: this.state.newId + 1
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.addPokemon}/>
        <br />
        <Search onChange={this.handleChange} searchPoke={this.state.searchPoke}/>
        <br />
        <PokemonCollection pokemons={this.state.displayPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
