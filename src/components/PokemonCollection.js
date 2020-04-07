import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemons = () => {
    return this.props.pokemons.map( pokemon => { 
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
