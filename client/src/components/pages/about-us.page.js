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
import LocationMap from '../maps.component';

//Importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

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
  if (configData.ABOUTUSLAYOUT === "descfirst"){
    return staticFeatures.pageLayout2
  }else if (configData.ABOUTUSLAYOUT === "desclast"){
    return staticFeatures.pageLayout6
  }
})();

export default class AboutUs extends Component {
  render() {
    return (
      <div className={websiteStyle.pageStyling}>
        <div className={[staticFeatures.pageContainer, pageLayout].join(' ')}>
            <div className={[staticFeatures.pageTitle, websiteStyle.pageTitle].join(' ')}>
              About us.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              {configData.ABOUTUSTEXT}
            </div>

            <div className={[staticFeatures.infoBox, websiteStyle.infoBox].join(' ')}>
              <FontAwesomeIcon icon={faAddressBook}/><b>  Our Address:</b> 
              <i><br/>
              <br/>
              {configData.HOUSEANDSTREET}
              <br/>
              {configData.POSTCODE}
              <br/>
              {configData.PROVINCE}
              <br/>
              {configData.COUNTRY}</i>
            </div>

            <LocationMap lat={40.7128} lng={-74.0060}/>
        </div> 
      </div>
    );
  }
}