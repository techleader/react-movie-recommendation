import React, { Component } from 'react';
import TopHeadlines from "../components/TopHeadlines.js";



class GeneralNews extends Component{
  render() {
    return(
      <div>
        <h2>General News</h2>
        <TopHeadlines category="general"></TopHeadlines>
      </div>
    );
  }
}

export default GeneralNews;