import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing components
import Booking from './booking.component';
import Space from './spacing.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class Bookings extends Component {
  render() {
    return (
      <div className={staticFeatures.pageStyling3}>
        <div className={staticFeatures.pageContainer}>
            <div className={websiteStyle.h2}>
              Book with us.
            </div>

            <Space size="medium"/>

            <Booking />
        </div> 
      </div>
    );
  }
}