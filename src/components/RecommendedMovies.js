import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from "react-redux";
import movies from '../movieData/movies.json';
import Movie from './Movie';



class RecommendedMovies extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { comedy, action, adventure,war } = this.props;
    console.log(comedy);
    let noRecommendations = " - No recommendations!!!";
    return (
      <div style={{ color: "white" }}>
        Recommended Movies { (comedy | adventure | action | war) ? "" : noRecommendations}
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

              } else if (movie.genre == "war" && war == true) {
                return (
                  <Col md={3}>
                    <Movie data={movie} ></Movie>
                  </Col>
                );
              } else {
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
    adventure: state.adventure,
    war: state.war
  };

};
export default connect(mapStateToProps, null)(RecommendedMovies);