//This is a copy-and-paste file for demonstrating how to compose pages for the site.
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing components
import Booking from './booking.component';
import Gallery from './gallery.component';
import PriceList from './price-list.component'
import LocationMap from './maps.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class NameHere extends Component {
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
              This is some example text which is written about the profound subject of nothing. Nothing can be conceptualised as 
              the opposite of everything, or otherwise put, the abscence of anything. 
            </div>

            {/*Booking component:*/}
            <Booking />

            {/*Gallery demo:*/}
            <Gallery />

            {/*Price list demo:*/}
            <PriceList />

            {/*Maps widget*/}
            <LocationMap />
        </div> 
      </div>
    );
  }
}