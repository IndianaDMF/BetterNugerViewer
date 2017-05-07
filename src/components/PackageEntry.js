import React, { Component } from 'react';
import Link from './Link';
import NestedData from './NestedData';

class PackageEntry extends Component {
	constructor(){
		super();
		this.renderVersion = this.renderVersion.bind(this);		
	}	

	renderVersion(key){
		const { packageDetail } = this.props;
		//"http://dev-tfs-01.v.dom/Nuget/nuget/Packages(Id='Efinancial.Lib.Core',Version='17.316.2')"
		let str = new String(packageDetail.id);		
		let blah = str.substring(str.search(/Version=/)+9, str.lastIndexOf("'"));		
		return(
			<div key={key}><span>{blah}</span></div>
		)
	}

	render(){
		const { packageDetail } = this.props;			
		return(	
			<tr>	
			<td>
			<ul>
			{
				Object
					.keys(packageDetail.title)
					.map(key =><NestedData key={key} index={key} details={packageDetail.title[key]}/>)
			}	
			</ul>		
			</td>
			<td>
			{
				Object
					.keys(packageDetail.id)
					.map(this.renderVersion)
			}	
			</td>
			<td>
			{
				Object
					.keys(packageDetail.author)
					.map(key => <span key={key}>{packageDetail.author[key].name}</span>)
			}	
			</td>
			<td>
			{
				Object
					.keys(packageDetail.summary)
					.map(key =><NestedData key={key} index={key} details={packageDetail.summary[key]}/>)
			}	
			</td>
			<td>
				{
					Object
						.keys(packageDetail.updated)
						.map(key => <span key={key}>{packageDetail.updated[key]}</span>)
				}
			</td>
			<td>
			<li className="list-group-item"><Link links={packageDetail.link} /></li>  	
			</td>
			</tr>
		)
	}
}

export default PackageEntry;