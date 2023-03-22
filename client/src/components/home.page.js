import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing sub components
import Awards from './awards.component';
import Space from './spacing.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class Home extends Component {
  render() {
    return (
      //Choose pageStyling1, pageStyling2, pageStyling3 or pageStyling4
      <div className={staticFeatures.pageStyling1}>
        <div className={staticFeatures.pageContainer}>
            {/*Page headers:*/}
            <div className={websiteStyle.h2}>
              Welcome.
            </div>

            {/*Paragraph text:*/}
            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              This is the offical website of the world's top barbers. Here at the world's best barbers we do our best to ensure that all our trims are top notch. 
              
              <br/>
              <br/>

              We have been in the barber's game for as long as this project has been standing. 
              
              <br/>

              We specialise in making sure you believe that we would in fact give you the best trim you've
              ever had, but in reality, you can never get one of them!

              <br/>
              <br/>

              Please explore the website to find out more information about what you'll never have...
            </div>

            <Space size="small"/>

            <Awards/>
        </div> 
      </div>
    );
  }
}