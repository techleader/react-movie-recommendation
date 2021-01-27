import React, { Component } from 'react';
import { connect } from "react-redux";
import { recommend } from "../actions/action.js"
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import { GrLike, GrDislike } from "react-icons/gr";

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
               <CardImg top width="100%" height="150" src={this.props.data.image.url} alt="Card image cap" />
               <CardBody>
                  <CardTitle >{this.props.data.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.data.genre}</CardSubtitle>
                  <Row>
                     
                     <Col sm={2}>
                        <GrLike style={{color: 'blue'}} onClick={() => this.props.recommend( this.props.data.genre, true )}></GrLike>
                     </Col>
                     <Col sm={2}>
                        <GrDislike onClick={() => this.props.recommend( this.props.data.genre, false )}></GrDislike>
                     </Col>
                     <Col sm={6}></Col>
                  </Row>

               </CardBody>
            </Card>



         </div>
      );
   }
}

export default connect( null, { recommend } )( Movie );
