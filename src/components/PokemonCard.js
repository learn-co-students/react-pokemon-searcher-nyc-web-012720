import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    showBack: false
  }
  
  clickHandler = () => {
    this.setState(prevState => ({showBack: !prevState.showBack}))
  }

  render() {
    const {name, stats, sprites} = this.props.data
    const hp = stats.find(stat => stat.name === "hp")
    return (
      <Card onClick={this.clickHandler}>
        <div>
          <div className="image">
            <img src={this.state.showBack ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
