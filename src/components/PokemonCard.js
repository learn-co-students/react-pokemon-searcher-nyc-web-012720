import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    flipped: false,
  };

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped,
    });
  };

  render() {
    console.log(this.state.flipped);
    return (
      <Card>
        <div>
          <button
            onClick={() => this.props.handleDelete(this.props.pokemon.id)}
          >
            Delete
          </button>
          <div onClick={this.handleClick}>
            <div className="image">
              {this.state.flipped ? (
                <img src={this.props.pokemon.sprites.back} alt="oh no!" />
              ) : (
                <img src={this.props.pokemon.sprites.front} alt="oh no!" />
              )}
            </div>
            <div className="content">
              <div className="header"> {this.props.pokemon.name} </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {
                  this.props.pokemon.stats.find((stat) => stat.name === "hp")
                    .value
                }{" "}
                hp
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
