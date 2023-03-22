//The price list component will read the data about prices in the config file and format it into a menu (i.e. like a dinner menu).
//It will hold the selected service in state and will run the handleSelect prop function when a service is selected.

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Loading configuration
import configData from '../config/barber-site.config.json';

//Loading styling module
import staticFeatures from "../css-modules/static.module.css";

const servicesAndPrices = Object.keys(configData.PRICES).map((service) => [service, configData.PRICES[service]]);

//Function to generate price list JSX
function generatePriceListJSX(selectFunction){
    const priceListJSX = servicesAndPrices.map((serviceAndPrice) => {
        return (
            <div className={staticFeatures.priceListItem}>
                <div>
                    <button className={staticFeatures.priceListButton} onClick={() => selectFunction(serviceAndPrice[0])}>{serviceAndPrice[0]}</button>
                </div>
                <div className={staticFeatures.priceTextBox}>
                    <p>{configData.CURRENCY}{serviceAndPrice[1]}</p>
                </div>
            </div>
        )
      });

    return priceListJSX;
}

export default class PriceList extends Component {
    constructor(props){
        super(props);

        this.state = {
            serviceSelected: undefined
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(service){
        this.setState({
            serviceSelected: service
        });

        this.props.handleSelect(service);
    }

    render() {
        return (
            <div>
                Available services
        
                <div className={staticFeatures.pricesContainer}>
                    {generatePriceListJSX(this.handleSelect)}
                </div> 

            </div>
        );
    }
}