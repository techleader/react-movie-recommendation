import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



class Home extends Component{

  render(){
      const {generalVal, businessVal,sportsVal,entertainmentVal} = this.props;   
      
        let homeButton = ""; 
        if(generalVal=="true"){
          homeButton= <Redirect to="/general"></Redirect>
        } else if(businessVal=="true"){
          homeButton= <Redirect to="/business"></Redirect>
        } else if(sportsVal=="true"){
          homeButton= <Redirect to="/sports"></Redirect>
        } else if(entertainmentVal=="true"){
          homeButton= <Redirect to="/entertainment"></Redirect>
        } else {
          homeButton= <Redirect to="/settings"></Redirect>
        }

      return (
            <div>  
                {homeButton}          
            </div>
        );

  }

}
const mapStateToProps = (state) => {
  console.log("InMaptoProps in newsource" );
  console.log(state);
     return {
      generalVal : state.generalVal,
      businessVal : state.businessVal,
      sportsVal: state.sportsVal,
      entertainmentVal: state.entertainmentVal
  };
  
};


export default  connect(mapStateToProps, null)(Home);