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
   constructor(props) {
      super(props);
      this.state = {
         genre: [],
         moviesIdByGenre: [],
         searchedMovies: [],
         listMovies: []

      }
   }

   componentDidMount() {

      var options = {
         method: 'GET',
         url: getAllGeneres,
         //params: {genre:'/chart/popular/genre/adventure'},
         headers: {
            'x-rapidapi-key': '4d8034dbfcmsh63312b428cf422ap19e69cjsn9d1bf0ded551',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            "useQueryString": true
         }
      };

      axios(options)
         .then(response => {
            let list = [];
            response.data.genres.map(genre => {
               let data = {};
               data["label"] = genre.description;
               list.push(data);
            })
            console.log(list);

            this.setState({
               genre: list
            });

         }).catch(error => {
            console.error(error);
         });


   }

   getMoviesDataById = async(genre) => {
      let data=[];
      for (let index = 0; index < this.state.moviesIdByGenre.length; index++) {

         var id = this.state.moviesIdByGenre[index].split("/")[2];
        
         var options = {
            method: 'GET',
            url: getMovie,
            params: { tconst: id },
            headers: {
               'x-rapidapi-key': '3544d79287msh6b6016b7da78104p1fffd5jsndab861fdb52a',
               'x-rapidapi-host': 'imdb8.p.rapidapi.com',
               "useQueryString": true
            }
         };

       await axios(options)
            .then(response => {
                 let movie= response.data;
               movie["genre"]=genre;
               data.push(movie)
               
            
            }).catch(error => {
               console.error(error);
            });

      }
      console.log("data:",JSON.stringify(data));

   }

   getMoviesByGenre = async (genre) => {

      var options = {
         method: 'GET',
         url: getMovieByGenre,
         params: { genre: '/chart/popular/genre/' + genre },
         headers: {
            'x-rapidapi-key': '3544d79287msh6b6016b7da78104p1fffd5jsndab861fdb52a',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
         }
      };

      await axios(options)
         .then(response => {
            let data = [];
            for (let index = 0; index < 6; index++) {
               data.push(response.data[index]);
            }
            this.setState({
               moviesIdByGenre: data
            });
          
         }).catch(error => {
            console.error(error);
         });
   }




   // handleOnChange = async (e) => {

   //    let searchedGenre = e.label.toLowerCase();
   //    let params = { genre: '/chart/popular/genre/' + searchedGenre };
   //    await this.fetchApiRequest(getMovieByGenre, params);
   //    console.log("moviesbyGenre after setState", this.state.moviesIdByGenre);
   // }

   render() {
      console.log("render-MovieListByID:",this.state.moviesIdByGenre);
      console.log("render-moviesData: ",this.state.MovieData);
      return (
         <div>
            <br></br>
            <Row>
               <Col sm={3} md={3} lg={3} >
                  <Button onClick={() => this.getMoviesByGenre("Sport")}>getMoviesByGenre</Button>

                  <Button onClick={()=>this.getMoviesDataById("Sport")}>getMoviedata</Button>
               </Col>
               <Col sm={3} md={3} lg={3} >
               </Col>

               <Col sm={4} md={4} lg={4} >
                  <Select
                     //value=
                     isClearable
                     closeMenuOnSelect={true}
                     placeholder='Search movie by genre...'
                     options={this.state.genre}
                     onChange={this.handleOnChange}
                  //className="searchCampaign"
                  />

               </Col>
            </Row>

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
