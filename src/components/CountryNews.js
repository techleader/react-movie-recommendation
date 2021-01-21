import React, { Component } from 'react';
import Article from './Article';

class CountryNews extends Component{

    constructor(props) {
        super(props);
        this.state = {
          status: null,
          totalResults: 0,
          articles: []
         
        };
      this.fetchCountryNews(this.props.value);
    
    }

    render(){
        const {status, totalResults, articles } = this.state;
       
        return (  
          <div>
          <p>{totalResults}</p>
          <ul>
            {articles.map(article => (
              <li>
                <Article value={article}></Article>
              </li>
            ))}
          </ul>       
         </div> 
        );
    }


    fetchCountryNews(value) {
      
        fetch("https://newsapi.org/v2/top-headlines?country="+value+"&apiKey=c1643f0e5bc84372afe5138f631380d1")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                totalResults: result.totalResults,
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

export default CountryNews;
