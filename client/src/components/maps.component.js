//The maps component renders a google map widget displaying the location passed through the lng and lat properties.

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing google maps API
import { Map, GoogleApiWrapper } from 'google-maps-react';

//Importing sizing styler module
import staticFeatures from "../css-modules/static.module.css";

export class LocationMap extends Component {
  render() {
    const mapSize = {
      width: "40vw",
      height: "40vh",
    };

    const containerStyle = {
      maxWidth: "40vw",
      height: "40vh"
     };
    
    
    return (
      <div className={staticFeatures.mapContainer}>
        <Map google={this.props.google} style={mapSize} containerStyle={containerStyle} zoom={14} initialCenter={{lat:this.props.lat, lng:this.props.lng}}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmke7tEp7xh_gxn_xFVyeqFPfUBMWZN2Y'
})(LocationMap);