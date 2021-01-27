import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Button, Row, Col } from 'reactstrap';


class Navigation extends Component {


   render() {
      const { } = this.props;
      return (
         <div>
            <Navbar color="dark">
               <NavbarBrand ><h4 className="text-danger   ">Prime Video </h4></NavbarBrand>
               <Nav >
                  <NavItem>
                     <NavLink to="/"><Button color="info">Home</Button> </NavLink>
                     {/* <NavLink to="/">
                        <Select
                           //value=
                           isClearable
                           closeMenuOnSelect={true}
                           placeholder='Search movie by genre...'
                           options={this.state.genre}
                           //onChange={this.handleOnChange}
                        //className="searchCampaign"
                        />
                     </NavLink> */}
                     <NavLink to="/Settings"><Button color="info"> Settings</Button> </NavLink>
                  </NavItem>
               </Nav>
            </Navbar>

         </div>
      );
   }
}

const mapStateToProps = ( state ) => {
   console.log( "InMaptoProps" );
   console.log( state );
   return {
      generalVal: state.generalVal,
      businessVal: state.businessVal,
      sportsVal: state.sportsVal,
      entertainmentVal: state.entertainmentVal
   };

};

export default connect( mapStateToProps, null )( Navigation );
