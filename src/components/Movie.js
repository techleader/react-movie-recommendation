import React, { Component } from 'react';
import { connect } from "react-redux";
import { recommend } from "../actions/action.js"
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
            <Button name="Like" onClick={() => this.props.recommend(this.props.data.genre,true)}>Like</Button>
            <Button name="Dislike" onClick={() => this.props.recommend(this.props.data.genre,false)}>Dislike</Button>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default connect(null, { recommend })(Movie);
