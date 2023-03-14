//This is a booking component which is set-up based on the provided config file.
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//Importing sub-components
import DateSelector from './date-select.component';
import TimeSelector from './time-select.component';

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
      selectedDate: {
        day: currentDay,
        month: currentMonth
      },

      selectedTime: {
        hour: undefined,
        minute: undefined
      }
    };

    this.dateUpdated = this.dateUpdated.bind(this);
    this.timeUpdated = this.timeUpdated.bind(this);
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
  }

  render() {
    return (
      <div className={[staticFeatures.bookingComponentContainer, websiteStyle.bookingComponent].join(' ')}>
        <DateSelector handleSelect={this.dateUpdated} day={currentDay} month={currentMonth}/>

        <div className={staticFeatures.timeAndConfirmationContainer}>
          {<TimeSelector handleSelect={this.timeUpdated} day={this.state.selectedDate.day} month={this.state.selectedDate.month}/>}

          {(this.state.selectedTime.hour !== undefined)&&(this.state.selectedTime.minute !== undefined)&& //If time selected show confirmation text
            <p className={websiteStyle.bookingText}>
            BOOK FOR {formatIntToTwoDigits(this.state.selectedDate.day)}/{formatIntToTwoDigits(months.indexOf(this.state.selectedDate.month) + 1)} 
            , at {formatIntToTwoDigits(this.state.selectedTime.hour)}:{formatIntToTwoDigits(this.state.selectedTime.minute)}
            </p>
          }

          <div className={staticFeatures.bookingButton}>
            <button className={websiteStyle.menuButton} onClick={this.getDateSelected} type='button'>Book now</button>
          </div>
        </div>
      </div>
    );
  }
}