//This is a booking component which is set-up based on the provided config file. 
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing icons
import {faCartShopping, faClock, faContactBook} from '@fortawesome/free-solid-svg-icons';

//Importing sub-components
import DateSelector from './date-select.component';
import TimeSelector from './time-select.component';
import PriceList from './price-list.component';
import InfoForm from './info-form.component';
import SectionCompleted from './section-completed.component';

//Loading configuration
import configData from '../../config/barber-site.config.json';

//Loading all styling modules
import staticFeatures from "../../css-modules/static.module.css";

import cleanStyle from "../../css-modules/clean.module.css";
import modernStyle from "../../css-modules/modern.module.css";
import rusticStyle from "../../css-modules/rustic.module.css";

//Determine website styling module from the config file
const websiteStyle = (function() {
  if (configData.STYLE === "clean"){
    return cleanStyle
  }else if (configData.STYLE === "modern"){
    return modernStyle
  }else if (configData.STYLE === "rustic"){
    return rusticStyle
  }
})();

//Useful functions 
function formatIntToTwoDigits(number){
  let twoDigit = number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  return twoDigit;
}

//For setting the date selector
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();

var currentMonth = months[parseInt(String(currentDate.getMonth() + 1).padStart(2, '0') - 1)];
var currentDay = String(currentDate.getDate()).padStart(2, '0');

export default class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: undefined,

      selectedDate: {
        day: currentDay,
        month: currentMonth
      },

      selectedTime: {
        hour: undefined,
        minute: undefined
      },

      userInfo: {
        fname: undefined,
        sname: undefined,
        email: undefined,
        telephone: undefined
      },

      sectionCompleted: {
        serviceSelect: false,
        dateTime: false,
        infoForm: false
      }
    };

    this.serviceUpdated = this.serviceUpdated.bind(this);
    this.dateUpdated = this.dateUpdated.bind(this);
    this.timeUpdated = this.timeUpdated.bind(this);
    this.infoSubmitted = this.infoSubmitted.bind(this);
  }

  serviceUpdated(serviceSelected){
    this.setState({
      selectedService: serviceSelected
    });

    this.setState({
      sectionCompleted: {
        serviceSelect: true,
        dateTime: false,
        infoForm: false
      }
    });
  }

  dateUpdated(daySelected, monthSelected){
    this.setState({
      selectedDate: {
        day: daySelected, 
        month: monthSelected}
    });
  }

  timeUpdated(hourSelected, minuteSelected){
    this.setState({
      selectedTime: {
        hour: hourSelected,
        minute: minuteSelected
      }
    })

    this.setState({
      sectionCompleted: {
        serviceSelect: true,
        dateTime: true,
        infoForm: false
      }
    });
  }

  infoSubmitted(fNameSubmitted, sNameSubmitted, emailSubmitted, telephoneSubmitted){
    this.setState({
      userInfo: {
        fname: fNameSubmitted,
        sname: sNameSubmitted,
        email: emailSubmitted,
        telephone: telephoneSubmitted
      }
    });

    this.setState({
      sectionCompleted: {
        serviceSelect: true,
        dateTime: true,
        infoForm: true
      }
    });
  }

  render() {

    return (
      //Here conditional rendering has been used to show parts of the form one by one based on a set of booleans representing the completion of the last section.
      <div className={[staticFeatures.bookingContainer, websiteStyle.bookingContainer].join(' ')}>
        {(this.state.sectionCompleted.serviceSelect === false) && /*If service select not complete render...*/
          <PriceList handleSelect={this.serviceUpdated}/>
        }
        {(this.state.sectionCompleted.serviceSelect === true) && /*If service select complete render...*/
          <SectionCompleted icon={faCartShopping} title={"Service"} info={this.state.selectedService}/>
        }

        {(this.state.sectionCompleted.dateTime === false) &&  (this.state.sectionCompleted.serviceSelect === true) && /*If service select complete, and date and time not complete, render...*/
          <DateSelector handleSelect={this.dateUpdated} day={this.state.selectedDate.day} month={this.state.selectedDate.month}/>
        }

        {(this.state.sectionCompleted.dateTime === false) && (this.state.sectionCompleted.serviceSelect === true) &&
          <TimeSelector handleSelect={this.timeUpdated} day={this.state.selectedDate.day} month={this.state.selectedDate.month}/>
        }
        {(this.state.sectionCompleted.dateTime === true) && 
          <SectionCompleted icon={faClock} title={"Date & Time"} info={
            formatIntToTwoDigits(this.state.selectedDate.day) + "/" + formatIntToTwoDigits(months.indexOf(this.state.selectedDate.month) + 1) 
            + " at " + formatIntToTwoDigits(this.state.selectedTime.hour) + ":" + formatIntToTwoDigits(this.state.selectedTime.minute)}/>
        }

        {(this.state.sectionCompleted.infoForm === false) && (this.state.sectionCompleted.serviceSelect === true) && (this.state.sectionCompleted.dateTime === true) &&
          <InfoForm handleSubmit={this.infoSubmitted}/>
        }
        {(this.state.sectionCompleted.infoForm === true) && 
          <SectionCompleted icon={faContactBook} title={"Your Information"} info={
            this.state.userInfo.fname + " " + this.state.userInfo.sname}/>
        }

        {(this.state.sectionCompleted.serviceSelect === true) && (this.state.sectionCompleted.dateTime === true) && (this.state.sectionCompleted.infoForm === true) && 
        //If all sections of the form are completed...
          <div className={staticFeatures.completeBookingContainer}>
            <div>Complete your booking </div>
            <button className={websiteStyle.menuButton}>Book now</button>
          </div>
        } 
      </div>
    );
  }
}