import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import { connect } from "react-redux";
import movies from '../movieData/movies.json';
import Movie from './Movie';



class RecommendedMovies extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { comedy, action, adventure } = this.props;
    console.log(comedy);
    return (
      <div style={{ color:"white"}}>
       <b> Recommended Movies</b>
        <Row>
          {
            movies.map(movie => {
              if (movie.genre == "comedy" && comedy == true) {
                return (
                  <Col md={3}>
                    <Movie data={movie} ></Movie>
                  </Col>
                );

              } else if (movie.genre == "action" && action == true) {
                return (
                  <Col md={3}>
                    <Movie data={movie} ></Movie>
                  </Col>
                );

              } else if (movie.genre == "adventure" && adventure == true) {
                return (
                  <Col md={3}>
                    <Movie data={movie} ></Movie>
                  </Col>
                );

              }else {
                return "";
              }
            })
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state);
  return {
    comedy: state.comedy,
    action: state.action,
    adventure: state.adventure
  };

};
export default connect(mapStateToProps, null)(RecommendedMovies);