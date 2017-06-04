import React, { Component } from 'react';
import { parseString } from 'xml2js';
import { defaultUrl } from '../settings';
import fs from 'fs';

import NugetService from '../NugetService';
import FeedSource from './FeedSource';
import PackageList from './PackageList';
import Search from './Search';

class App extends Component {
  constructor(){
    super();    
    this.saveRepoData = this.saveRepoData.bind(this);
    this.loadRepoData = this.loadRepoData.bind(this);

    this.state = {
      feedData: {}
    }
  }

  componentWillMount(){
    this.loadRepoData(defaultUrl());
  }

  saveRepoData(data){
    this.setState({
      feedData: data.feed
    });
  }

  loadRepoData(feedUrl){
    
    NugetService(feedUrl, (data)=>{
      //convert the xml into JSON
      parseString(data, (err, result) =>{
        this.saveRepoData(result);
      })
    });
  }

  render() {
    return (      
       <div className="row">
         <div className="col-md-4">
           <Search packages={this.state.feedData}/>
           <FeedSource saveRepositoryData={this.saveRepoData} />
         </div>
        <div className="col-md-8">
          <PackageList packages={this.state.feedData} />
        </div>
       </div>     
    );
  }
}

export default App;

