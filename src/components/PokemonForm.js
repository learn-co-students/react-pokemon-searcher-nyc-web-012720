import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			hp: "",
			frontUrl: "",
			backUrl: "",
		};
	}

	handleOnChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleOnSubmit = (event) => {
    event.preventDefault();
    
     const data = {name: this.state.name, stats: [{value: this.state.hp, name: "hp" }], sprites: {front: this.state.frontUrl, back: this.state.backUrl}}

		fetch("http://localhost:3000/pokemon", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
        this.props.addPokemon(data)
        
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};
	render() {
		console.log(this.state);
		return (
			<div>
				<h3>Add a Pokemon!</h3>
				<Form onSubmit={this.handleOnSubmit}>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Name"
							placeholder="Name"
							value={this.state.name}
							name="name"
							onChange={this.handleOnChange}
						/>
						<Form.Input
							fluid
							label="hp"
							placeholder="hp"
							value={this.state.hp}
							name="hp"
							onChange={this.handleOnChange}
						/>
						<Form.Input
							fluid
							label="Front Image URL"
							value={this.state.frontUrl}
							placeholder="url"
							name="frontUrl"
							onChange={this.handleOnChange}
						/>
						<Form.Input
							fluid
							label="Back Image URL"
							placeholder="url"
							value={this.state.backUrl}
							name="backUrl"
							onChange={this.handleOnChange}
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

export default PokemonForm;
