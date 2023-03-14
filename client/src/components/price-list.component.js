//The price list component will read the data about prices in the config file and format it into a menu (i.e. like a dinner menu) according to the websites styling module.

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../css-modules/static.module.css";
import modernStyle from "../css-modules/modern.module.css";

//Determine website styling module from the config file
const websiteStyle = (function() {
    if (configData.STYLE === "modern"){
        return modernStyle
    }
})();

const specialitiesAndPrices = Object.keys(configData.PRICES).map((speciality) => [speciality, configData.PRICES[speciality]]);

//Function to generate price list JSX
function generatePriceListJSX(){
    const priceListJSX = specialitiesAndPrices.map((specialityAndPrice) => {
        return (
            <div className={staticFeatures.priceListItem}>
                <div className={websiteStyle.priceTextBox}>
                    <p className={websiteStyle.pHeadingStyle}>{specialityAndPrice[0]}</p>
                </div>
                <div className={websiteStyle.priceTextBox}>
                    <p className={websiteStyle.pHeadingStyle}>{configData.CURRENCY}{specialityAndPrice[1]}</p>
                </div>
            </div>
        )
      });

    return priceListJSX;
}

export default class PriceList extends Component {
  render() {
    return (
        <div className={staticFeatures.priceMenu}>
            {/*Header*/}
            <div className={websiteStyle.priceMenuHeader}>
                <div className={staticFeatures.priceListItem}>
                    <div className={websiteStyle.priceTextBox}>
                        <p className={websiteStyle.pHeadingStyle}>Speciality</p>
                    </div>
                    <div className={websiteStyle.priceTextBox}>
                        <p className={websiteStyle.pHeadingStyle}>Price</p>
                    </div>
                </div>
            </div>
            {/*List*/}
            <div className={websiteStyle.priceMenu}>
                {generatePriceListJSX()}
            </div>

        </div> 
    );
  }
}