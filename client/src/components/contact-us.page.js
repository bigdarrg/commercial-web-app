import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Loading all components
import Space from './spacing.component';
import Socials from './social-media-panel.component';

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
              You can contact us through any of these means, or through our social media.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              TELEPHONE: 07123456789
              <br/>
              EMAIL: worldsbestbarbers@barber.co.uk
            </div>

            <Space size={"large"}/>

            <Socials/>
        </div> 
      </div>
    );
  }
}