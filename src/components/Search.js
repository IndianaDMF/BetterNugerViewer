import React, { Component } from 'react';

class Search extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	    this.state = {
	      titleSearch: ''
	    }
	}

	handleChange(e, key) {
		console.log(e);
    // const fish = this.props.fishes[key];
    // // take a copy of that fish and update it with the new data
    // const updatedFish = {
    //   ...fish,
    //   [e.target.name]: e.target.value
    // }
    // this.props.updateFish(key, updatedFish);
  }
	render(){
		const {details} = this.props;		
		return(
			<div className="row">
				<input type="text" name="name" value={this.state.titleSearch} placeholder="Package Name Search" onChange={(e) => this.handleChange(e)} />
			</div>
		)
	}
}

export default Search;