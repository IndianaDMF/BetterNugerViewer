import React, { Component } from 'react';

class Link extends Component {	
	render(){
		const { links } = this.props;
		return(			
			<ul className="list-group">
  			{
				Object
					.keys(links)
					.map(key => <li
						key={key}
						className="list-group-item">
						<span>{this.props.links[key].$.href}</span></li>
					)
			}
			</ul>
		)
	}
}

export default Link;