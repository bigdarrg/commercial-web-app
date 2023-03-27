import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";

import classicStyle from "../css-modules/classic.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing sub components
import Awards from './awards.component';
import Space from './spacing.component';

//Importing images
import homeImage from '../media/home-image.jpg';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "classic"){
    return classicStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class Home extends Component {
  render() {
    return (
      //Choose pageStyling, pageStyling, pageStyling or pageStyling
      <div className={websiteStyle.pageStyling}>
        <div className={staticFeatures.pageContainer}>
            {/*Page headers:*/}
            <div className={[staticFeatures.pageTitle, websiteStyle.pageTitle].join(' ')}>
              Welcome.
            </div>

            <div className={[staticFeatures.twoPieceContainer, websiteStyle.twoPieceContainer].join(' ')}>
              <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
                This is the offical website of the world's top barbers. Here at the world's best barbers we do our best to ensure that all our trims are top notch. 
                
                <br/>
                <br/>

                We have been in the barber's game for as long as this project has been standing. 
                We specialise in making sure you believe that we would in fact give you the best trim you've
                ever had, but in reality, you can never get one of them!

                <br/>
                <br/>

                Please explore the website to find out more information about what you'll never have...
              </div>

              <img className={staticFeatures.imageLarge} src={homeImage} alt={"HAIR CUT"}/>

            </div>

            <Space size="small"/>

            <Awards/>
        </div> 
      </div>
    );
  }
}