import React, { Component } from 'react';
import Article from './Article';
import {   } from 'reactstrap';


class TopHeadlines extends Component{
    
    
    constructor(props) {
        super(props);
        this.state = {
          status: null,
          articles: []
         
        };
      this.fetchBusinessNews(this.props.category);
      
    }

    render(){
        const {status, totalResults, articles } = this.state;
       
        return (  
          <div>
          <br></br>
            {articles.map(article => (
               <Article value={article}></Article>
            
            ))}
             
         </div> 
        );
    }

    fetchBusinessNews(category) {
      
        fetch("https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=c1643f0e5bc84372afe5138f631380d1")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
               
                articles: result.articles
              });
            },
           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    

}

export default TopHeadlines;