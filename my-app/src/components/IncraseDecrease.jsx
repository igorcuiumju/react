import React, { Component } from 'react';

class IncraseDecrease extends Component {
	
	constructor(props) {
		super();

		this.state = {
			count: 0
		};
	}

	handelIncraseCounter() {
		let { count } = this.state;
		
		++count;

		this.setState({count: count});

	}
	handelDecreaseCounter() {
		let { count } = this.state;

		--count;

		this.setState({count: count});

	}

	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<div>
					<button onClick={this.handelIncraseCounter.bind(this)} >+</button>
					<span> | </span>
					<button onClick={this.handelDecreaseCounter.bind(this)} >-</button>
				</div>
			</div>
		)
	}
}
export default IncraseDecrease