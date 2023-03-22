//This is a simple component which is for making blank spaces between components, it has one property, size. Use small, medium or large. 
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading styling module
import staticFeatures from "../css-modules/static.module.css";

export default class Space extends Component {
  render() {
    var spaceSize = staticFeatures.mediumSpace;

    if (this.props.size === "small"){
        spaceSize = staticFeatures.smallSpace;
    }
    else if (this.props.size === "large"){
        spaceSize = staticFeatures.largeSpace;
    }
    
    return (
      //Choose pageStyling1, pageStyling2, pageStyling3 or pageStyling4
      <div className={spaceSize} />
    );
  }
}