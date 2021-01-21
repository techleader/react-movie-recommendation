import React, { Component } from 'react';
import TopHeadlines from "../components/TopHeadlines.js";

class SportsNews extends Component{

  render() {
    return (  
      <div>
      <h2>Sports News</h2>
      <TopHeadlines category="sports"></TopHeadlines>
      </div>
    );
  }

}

export default SportsNews;