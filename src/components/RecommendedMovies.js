import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import actionMovieData from '../movieData/movies.json'
import Movie from './Movie';



class RecommendedMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        Recommended Movies
        <Row>
          {
            actionMovieData.map(movie => {
              return (   
                <Col md={3}>
                  <Movie data={movie} ></Movie>
                </Col>
              );
            })
          }
        </Row>
      </div>
    );
  }
}

export default RecommendedMovies;