import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggled: false
  }
  handleToggled = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }
  render() {
    return (
      <Card onClick={this.handleToggled}> 
        <div>
          <div className="image">
            {this.state.toggled ? (  <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            ) : (
              <img src={this.props.pokemon.sprites.front}alt="oh no!" />
            )
            }
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
