import React from "react";
import BusinessNews from "../business/BusinessNews";
import { connect } from 'react-redux'

import {Button}from 'reactstrap';
import NewsSource from "./NewsSource";


const Settings = () => {
    return (
        <div>          
          <NewsSource/>      
       
        </div>
    );

};

export default Settings;