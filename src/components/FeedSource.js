import React, { Component } from 'react';
import NugetService from '../NugetService';
import { parseString } from 'xml2js';
import { defaultUrl } from '../settings';

class FeedSource extends Component {	
	 loadData(event){	 	
	 	event.preventDefault();
	 	const inputVal = this.feedInput.value;	 	
	    NugetService(inputVal, (data)=>{
	    	parseString(data, (err, result) =>{
	    		this.props.saveRepositoryData(result);
	    	})
	    });   
  	}

	render(){
		return(
			<form onSubmit={this.loadData.bind(this)} className="form-horizontal">	
			 <div className="form-group">
 			   <label htmlFor="feedUrlInput">Feed Url</label>
 			   <input type="text" required placeholder="Feed Name" id="feedUrlInput" className="form-control"
					defaultValue={defaultUrl()} ref={(input)=>{this.feedInput = input}}/>
 			 </div>				
				<button type="submit" className="btn btn-default">Load Nuget Feed -></button>
			</form>
		)
	}
}

export default FeedSource;