import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import actionMovieData from '../movieData/movies.json'
import Movie from './Movie';



class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        <Row>
          Movies
        </Row>
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

export default Movies;