import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Loading all components
import Space from './spacing.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class ContactUs extends Component {
  render() {
    return (
      <div className={staticFeatures.pageStyling1}>
        <div className={staticFeatures.pageContainer}>
            <div className={websiteStyle.h2}>
              Contact Us.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
            Here will be all our contact information...
            </div>

            <Space size="large" />
            <Space size="small" />
        </div> 
      </div>
    );
  }
}