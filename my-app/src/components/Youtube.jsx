import React, { Component } from 'react';


class Youtube extends Component {
	
	render() {
		
		const { onInputChange, ovBtnClick, searchTerm } = this.props;

		return(
			<div>
				<p>Youtube search</p>
				<input 
					placeholder="add text"
					value={searchTerm}
					onChange={onInputChange}
				/>
				<button onClick={ovBtnClick} >search</button>
			</div>
		)
	}
}

export default Youtube;