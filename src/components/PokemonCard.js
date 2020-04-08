import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    picture: false
  }

  togglePicture = () => {
    this.setState({picture: !this.state.picture})
  }

  render() {
    console.log(this.state.picture)
    return (
      <Card>
        <div>
    <div onClick={this.togglePicture} className="image">
            {this.state.picture ? <img src={this.props.sprites.front} alt="oh no!" /> : <img src={this.props.sprites.back} alt="oh no!" />}
          </div>
          <div className="content">
    <div className="header"><h4>{this.props.name}</h4></div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
            <p>{this.props.stats[5].value}  {this.props.stats[5].name}  </p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
