import React from 'react'
import { Card } from 'semantic-ui-react'

// {
//   "height": 10,
//   "weight": 130,
//   "id": 2,
//   "name": "ivysaur",
//   "abilities": ["overgrow", "chlorophyll"],
//   "moves": [],
//   "stats": [
//     {
//       "value": 80,
//       "name": "special-defense"
//     },
//     {
//       "value": 80,
//       "name": "special-attack"
//     },
//     {
//       "value": 63,
//       "name": "defense"
//     },
//     {
//       "value": 62,
//       "name": "attack"
//     },
//     {
//       "value": 60,
//       "name": "speed"
//     },
//     {
//       "value": 60,
//       "name": "hp"
//     }
//   ],
//   "types": ["grass", "poison"],
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "back":
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//   }
// },

class PokemonCard extends React.Component {

  state={
    imageDisplayed:this.props.pokemon.sprites.front
  }

  showBackImg = () => {
    this.setState(prevState => {
      const imageDisplayed = prevState.imageDisplayed === this.props.pokemon.sprites.front ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front;
      return {imageDisplayed}
    })
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Card onClick={this.showBackImg}>
        <div>
          <div className="image">
            <img src={this.state.imageDisplayed} alt={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
