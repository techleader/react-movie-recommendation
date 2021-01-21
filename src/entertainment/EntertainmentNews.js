import React, {Component}from "react";
import TopHeadlines from "../components/TopHeadlines.js";

class EntertainmentNews extends Component{

    render(){

        return(
            <div>
            <h2>Entertainment News</h2>
            <TopHeadlines category="entertainment"></TopHeadlines></div>
            
        );
    }
}
export default EntertainmentNews;