import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection= props => {

  const renderPoken = () => {
    const list = [...props.pokemons]
    return list.map( pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} findHp={props.findHp}/>
    })
  }

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderPoken()}
    </Card.Group>
  )
}

export default PokemonCollection
