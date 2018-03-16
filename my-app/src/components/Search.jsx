import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super();
		this.state = {
			searchTerm: ''
		};
	}

	handleInputChange(key, event) {
		this.setState({[key]: event.target.value});
	}

	render() {
		return(
			<div>
				<h2>{this.state.searchTerm}</h2>
				<input 
					placeholder="Add text"
					value={this.state.searchTerm}
					onChange={this.handleInputChange.bind(this, 'searchTerm')}
				/>
			</div>
		)
	}
}

export default Search