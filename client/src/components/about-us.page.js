import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing components
import LocationMap from './maps.component';
import Space from './spacing.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class AboutUs extends Component {
  render() {
    return (
      <div className={staticFeatures.pageStyling2}>
        <div className={staticFeatures.pageContainer}>
            <div className={websiteStyle.h2}>
              About us.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              We started back in the day when the developer ran the npm create-react-app command. Since then it's been nothing but no business at all, it has been non-non-stop.

              <br/>
              <br/>

              We are located in a discrete location, one which you'll never actually come to, so it'll seem like we exist.

              <br/>
              <br/>
              <br/>
              
              Come & see us at: Unknown Avenue, N0T4P05TC0D3, Left Side, Mars...
            </div>

            <Space size="small"/>

            <LocationMap />
        </div> 
      </div>
    );
  }
}