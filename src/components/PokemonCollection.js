import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPoken = () => {
    const list = this.props.pokemons
    return list.map( pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} findHp={this.props.findHp}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPoken()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
