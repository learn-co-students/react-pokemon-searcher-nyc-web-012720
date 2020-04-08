import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  renderPokemons = () => {
    return this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} findHp={this.props.findHp}/>)
  }
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
