import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col, Alert, Button } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';
import Movies from "./Movies";
import RecommendedMovies from "./RecommendedMovies";



let getAllGeneres = 'https://imdb8.p.rapidapi.com/title/list-popular-genres';
let getMovieByGenre = 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre';
let params = { genre: '/chart/popular/genre/adventure' };
let getMovieDataById = 'https://imdb8.p.rapidapi.com/title/get-meta-data';
let getMovie = 'https://imdb8.p.rapidapi.com/title/get-base';


class Home extends Component {
  

   render() {
      return (
         <div>
           
            <br></br>
            <Row>
               <Col sm={2}>
               </Col>
               <Col sm={8}  >
                  <div className="background">
                     <RecommendedMovies></RecommendedMovies>
                  </div>
               </Col>
               <Col sm={2}></Col>
            </Row>
            <br></br>
            <Row>
               <Col sm={2} >
               </Col>
               <Col sm={8} >
                  <div className="moviebg">
                     <Movies></Movies>
                  </div>
               </Col>
               <Col sm={2} >
               </Col>
            </Row>

         </div>
      );
   }
}
const mapStateToProps = (state) => {
   console.log("InMaptoProps in newsource");
   console.log(state);
   return {
      generalVal: state.generalVal,
      businessVal: state.businessVal,
      sportsVal: state.sportsVal,
      entertainmentVal: state.entertainmentVal
   };

};

export default connect(mapStateToProps, null)(Home);
