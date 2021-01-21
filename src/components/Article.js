import React, { Component } from 'react';
import TopHeadlines from "../components/TopHeadlines.js";
import {  Card, CardImg,CardSubtitle, CardTitle, CardText,CardBody, Row,Col, Button } from 'reactstrap';
class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: null,
          totalResults: 0,
          article: props.value,
           
              
        };
      this.setName = this.setName.bind(this);
    }

    setName(){
      this.setState({
        name: "rajesh"
      })
    }
  render() {
    
    return (        
      <div>
         
       <Row>           
         <Col sm="12"md={{ size:8, offset: 2 }}>
          <Card>
          <CardTitle> {this.state.article.title} </CardTitle>
                <a href={this.state.article.url} className="danger"> 
                  <CardImg width="100" src={this.state.article.urlToImage}  alt="Card image cap"  />
                </a>
               <CardBody>
                      <CardText>{this.state.article.content} </CardText>
               </CardBody>
          </Card>
          </Col>
      </Row>

          <br></br>
      </div>
    );
  }

 

}

export default Article;