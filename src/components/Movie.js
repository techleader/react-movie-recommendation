import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';

class Movie extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div>
        <br></br>
        <Card>
          <CardTitle> {this.props.data.title} </CardTitle>
          <CardImg width="" height="150"
            src={this.props.data.image.url} alt="Card image cap" />
          <CardBody>
            <CardText>{this.props.data.titleType} </CardText>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default Movie;