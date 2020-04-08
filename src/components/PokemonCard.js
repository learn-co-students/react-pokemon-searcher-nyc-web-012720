import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    front: true
  }

  handleClick = (e) => {
    this.setState(prevState => {
      return {
        front: !prevState.front
      }
    })
  }

  render() {
    const pokemon = this.props.pokemon
    let index = this.props.findHp(pokemon)
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.front ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {index}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
