import React, { Component } from 'react';

class NestedData extends Component {
	render(){
		const {details} = this.props;		
		return(
			<li className="list-group-item"><span>{details._}</span></li>
		)
	}
}

export default NestedData;