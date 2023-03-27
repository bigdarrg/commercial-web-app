import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";

import classicStyle from "../css-modules/classic.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing components
import LocationMap from './maps.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

//Determine website styling module from the config file{websiteStyle.pageTitle}
const websiteStyle = (function() {
  if (configData.STYLE === "classic"){
    return classicStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class AboutUs extends Component {
  render() {
    return (
      <div className={websiteStyle.pageStyling}>
        <div className={staticFeatures.pageContainer}>
            <div className={[staticFeatures.pageTitle, websiteStyle.pageTitle].join(' ')}>
              About us.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              We started back in the day when the developer ran the npm create-react-app command. Since then it's been nothing but no business at all, it has been non-non-stop.

              <br/>

              We are located in a discrete location, one which you'll never actually come to, so it'll seem like we exist.

              <br/>
              <br/>
              <br/>

              
              <div className={staticFeatures.addressMapContainer}>
                <div className={websiteStyle.infoBox}>
                  <FontAwesomeIcon icon={faAddressBook}/><b>  Our Address:</b> 
                  <i><br/>
                  <br/>
                  Bio-life Avenue 
                  <br/>
                  N0T4P05TC0D3 
                  <br/>
                  Upper-left Quater
                  <br/>
                  Mars</i>
                </div>

                <LocationMap lat={40.7128} lng={-74.0060}/>
              </div>
            </div>
        </div> 
      </div>
    );
  }
}