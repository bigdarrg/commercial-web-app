import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing google maps API
import { Map, GoogleApiWrapper } from 'google-maps-react';

//Importing sizing styler module
import staticFeatures from "../css-modules/static.module.css";

export class LocationMap extends Component {
  render() {
    const mapSize = {
      width: "70vw",
      height: "40vh",
    };
    
    return (
      <div className={staticFeatures.mapContainer}>
        <Map google={this.props.google} style={mapSize} zoom={14} initialCenter={{lat: -1.2884, lng: 36.8233}}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmke7tEp7xh_gxn_xFVyeqFPfUBMWZN2Y'
})(LocationMap);