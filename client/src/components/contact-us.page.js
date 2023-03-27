import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";

import classicStyle from "../css-modules/classic.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Loading all components
import Space from './spacing.component';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "classic"){
    return classicStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class ContactUs extends Component {
  render() {
    return (
      <div className={websiteStyle.pageStyling}>
        <div className={staticFeatures.pageContainer}>
            <div className={[staticFeatures.pageTitle, websiteStyle.pageTitle].join(' ')}>
              Contact Us.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              You can contact us through any of these means, or through our social media (links in page footer).
            </div>

            <Space size="medium"/>
        
              <div className={[staticFeatures.p, websiteStyle.p, websiteStyle.infoBox].join(' ')}>
                <FontAwesomeIcon icon={faPhone} /><b>  Telephone:</b> 
                <br/>
                07123456789
                <br/>
                <br/>
                <FontAwesomeIcon icon={faAddressCard} /><b>  Email:</b>
                <br/>
                worldsbestbarbers@barber.co.uk
              </div>
            </div> 
      </div>
    );
  }
}