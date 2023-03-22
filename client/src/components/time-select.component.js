//This component is a time selecting widget. Upon selecting a date it will run the function passed as the property selectHandler(hourSelected, minuteSelected).

//It has the properties day and month, the TimeSelector component will show the times appropiate for this date this date in
//correspondence with the opening hours provided in config data, but by default show all times.


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

//Useful functions
function formatIntToTwoDigits(number){
  let twoDigit = number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  return twoDigit;
}

//This is needed data for the time selector
//---- Hours & minutes (ALL)
const minutes = [0, 15, 30, 45]

var currentDateTime = new Date();
var currentYear = currentDateTime.getFullYear();

//---- Read opening hours from config file
const openHours = (function() {
    function getHoursOpen(open, close){
      var openHours = [];

      for (var hourIndex = open; hourIndex <= close; hourIndex++){
        openHours.push(hourIndex);
      }

      return openHours;
    }

    var openingTimes = []

    Object.keys(configData.OPENINGTIMES).forEach(day => {
        var openClose = {
            openHour: configData.OPENINGTIMES[day].slice(0, 2),
            openMinute: configData.OPENINGTIMES[day].slice(3, 5),
            closeHour: configData.OPENINGTIMES[day].slice(6, 8),
            closeMinute: configData.OPENINGTIMES[day].slice(9, 11)
        }

        openingTimes.push(openClose);
    })

    var openHours = [];
    
    for (var dayOfTheWeekIndex = 0; dayOfTheWeekIndex < 7; dayOfTheWeekIndex++){
      var openingHour = parseInt(openingTimes[dayOfTheWeekIndex].openHour)
      var closingHour = parseInt(openingTimes[dayOfTheWeekIndex].closeHour)

      openHours.push(getHoursOpen(openingHour, closingHour))
    }

    return openHours
})();


//---- Current implementation determines using only opening hours from the config file
function getAvailableTimes(day, month, year) {
  //Calculate based on opening hours in config file
  const dateObj = new Date(
    month + " " + String(formatIntToTwoDigits(day)) + "," + year
  );

  const dayOfTheWeekIndex = ((dateObj.getDay() + 6) % 7);

  const hoursOpen = openHours[dayOfTheWeekIndex].slice(0, -1);

  var availabilityAll = [];

  hoursOpen.forEach((hour) => {minutes.forEach((time) => {availabilityAll.push([hour, time]);});
  });

  return availabilityAll;
}


//For generating JSX for time select
function generateAvailableTimesJSX(availableTimes, availableTimeButtonFunction){
    var JSXArray = [];

    availableTimes.forEach((time) => {JSXArray.push(
      <button onClick={() => availableTimeButtonFunction([time[0], time[1]])} className={staticFeatures.availableTimeButton}>
        <p>{formatIntToTwoDigits(time[0])}.{formatIntToTwoDigits(time[1])}
        {(time[0] < 12) &&
        "am"
        }
        {(time[0] >= 12) && 
        "pm"
        }
        </p>
      </button>
    )});

    return  JSXArray;
}


export default class TimeSelector extends Component {
  constructor(props) {
    super(props);

  this.state = {
    hourSelected : undefined,
    minuteSelected : undefined
  };

  this.handleTimeSelected = this.handleTimeSelected.bind(this);

  }

  handleTimeSelected(timeSelected) {
    this.setState({ 
      hourSelected: timeSelected[0],
      minuteSelected: timeSelected[1]
    });

    this.props.handleSelect(timeSelected[0], timeSelected[1])
  }

  render() {
    const daySelected = this.props.day;
    const monthSelected = this.props.month;

    return (
        <div className={staticFeatures.timeSelectContainer}>
            <div>Slot availability</div>

            <div className={staticFeatures.availableTimesContainer}>
              {generateAvailableTimesJSX(getAvailableTimes(daySelected, monthSelected, currentYear), this.handleTimeSelected)}
            </div>
        </div>
    );
  }
}         