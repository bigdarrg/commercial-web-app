import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../../css-modules/static.module.css";

import cleanStyle from "../../css-modules/clean.module.css";
import modernStyle from "../../css-modules/modern.module.css";
import rusticStyle from "../../css-modules/rustic.module.css";

//Importing sub components
import Awards from '../awards.component';

//Importing images
import homeImage from '../../media/home-image.jpg';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "clean"){
    return cleanStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }else if (configData.STYLE === "rustic"){
    return rusticStyle
  }
})();

const pageLayout = (function() {
  if (configData.HOMELAYOUT === "compact"){
    return staticFeatures.pageLayout1
  }else if (configData.HOMELAYOUT === "large"){
    return staticFeatures.pageLayout5
  }
})();


export default class Home extends Component {
  render() {
    return (
      <div className={websiteStyle.pageStyling}>
        <div className={[staticFeatures.pageContainer, pageLayout].join(' ')}>
            <div className={[staticFeatures.pageTitle, websiteStyle.pageTitle].join(' ')}>
              Welcome.
            </div> 

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              {configData.DESCRIPTION} 
                
              <br/>
              <br/>

              {configData.HOMEPAGETEXT}

              <br/>
              <br/>

              {configData.HOMEPAGETEXT2}
            </div>

            <div className={staticFeatures.imageBox}>
              <img className={staticFeatures.image} src={homeImage} alt={"WELCOME"}/>
            </div>

            <Awards/>
        </div> 
      </div>
    );
  }
}