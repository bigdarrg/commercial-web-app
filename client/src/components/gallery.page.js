import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Importing components
import Gallery from './gallery.component';

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "modern"){
    return modernStyle
  }
})();

export default class GalleryPage extends Component {
  render() {
    return (
      <div className={staticFeatures.pageStyling4}>
        <div className={staticFeatures.pageContainer}>
            <div className={websiteStyle.h2}>
              Gallery.
            </div>

            <div className={[staticFeatures.p, websiteStyle.p].join(' ')}>
              Here you can have a look through our camera roll of our day-to-day highlights.
            </div>

            <Gallery />
        </div> 
      </div>
    );
  }
}