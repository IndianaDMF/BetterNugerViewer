import React, { Component } from 'react';
import PackageEntry from './PackageEntry';

class PackageList extends Component {
	constructor(){
		super();
		this.renderEntry = this.renderEntry.bind(this);
	}

	renderEntry(key){		
		const entry = this.props.packages.entry[key];
		return(
			<PackageEntry key={key} packageDetail={entry} />
		)
	}

	render(){
		const data = this.props.packages.entry;				
		if(!data){ 
			return (
				<div>
				<p>This is not the data you are looking for!!</p>
				</div>
			)
		}		
		
		return(
			<div>
			<table className="table">
			<thead>
			<tr>
			<th>Title</th>
			<th>Version</th>			
			<th>Author</th>
			<th>Summary</th>
			<th>Updated On</th>
			<th>Links</th>
			</tr>
			</thead>
			<tbody>			
			{
				Object
				.keys(this.props.packages.entry)
				.map(this.renderEntry)
			}			  
			</tbody>
			</table>			
			</div>	
		)
	}
}

export default PackageList;