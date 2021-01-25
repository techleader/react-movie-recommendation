import React, { Component } from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand, Button, Row,Col } from 'reactstrap';


class Navigation extends  Component{

    render(){
    const {} = this.props;   



    return (
        <div>
             <Row>           
             <Col sm="1"></Col>
             <Col sm="10">
               <Navbar  color="dark">
                    <NavbarBrand ><h4 className="text-danger   ">Prime Video </h4></NavbarBrand>
                        <Nav >
                            <NavItem>
                                <NavLink to="/"><Button color="info">Home</Button> </NavLink>            
                                <NavLink to="/Settings"><Button color="info"> Settings</Button> </NavLink>
                            </NavItem>
                    </Nav>
                </Navbar>
             </Col>
             <Col sm="1"></Col>
        </Row>
  
       </div>
       
    );
    }

}

const mapStateToProps = (state) => {
    console.log("InMaptoProps" );
    console.log(state);
       return {
        generalVal : state.generalVal,
        businessVal : state.businessVal,
        sportsVal: state.sportsVal,
        entertainmentVal: state.entertainmentVal
    };
    
 };

export default connect(mapStateToProps, null)(Navigation);
