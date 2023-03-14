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
function getOpenHoursForDay(day, month, year) {
  //Calculate based on opening hours in config file
  const dateObj = new Date(
    month + " " + String(formatIntToTwoDigits(day)) + "," + year
  );

  const dayOfTheWeekIndex = ((dateObj.getDay() + 6) % 7);

  return openHours[dayOfTheWeekIndex].slice(0, -1);
}

function getMinutesForHour(){
  const timesAvailable = minutes;

  return timesAvailable;
}


//For generating JSX for time select
function generateHourSelectOptionsJSX(hours){
    var JSXArray = [];

    function generateHourJSX(hour){
        return <option value={parseInt(hour)}>{hour}</option>
    }

    for (var optionIndex = 0; optionIndex < hours.length; optionIndex++){
      JSXArray.push(generateHourJSX(formatIntToTwoDigits(hours[optionIndex])));
    } 

    return  JSXArray;
}

function generateMinuteSelectOptionsJSX(minutes){
  var JSXArray = [];

  function generateMinuteJSX(minute){
      return <option value={parseInt(minute)}>{minute}</option>
  }

  for (var optionIndex = 0; optionIndex < minutes.length; optionIndex++){
    JSXArray.push(generateMinuteJSX(formatIntToTwoDigits(minutes[optionIndex])));
  } 

  return JSXArray;
}


export default class TimeSelector extends Component {
  constructor(props) {
    super(props);

  this.state = {
    hourSelected : undefined,
    minuteSelected : undefined
  };

  this.onHourChange = this.onHourChange.bind(this);
  this.onMinuteChange = this.onMinuteChange.bind(this);

  }

  onHourChange(selectEvent) {
    this.setState({
      hourSelected: selectEvent.target.value
    });

    this.props.handleSelect(selectEvent.target.value, this.state.minuteSelected)
  }

  onMinuteChange(selectEvent) {
    this.setState({
      minuteSelected: selectEvent.target.value
    });

    this.props.handleSelect(this.state.hourSelected, selectEvent.target.value)
  }

  render() {
    const daySelected = this.props.day;
    const monthSelected = this.props.month;

    return (
        <div className={staticFeatures.timeSelectBoxContainer}>
            <select className={websiteStyle.timeSelectBox} onChange={this.onHourChange}>
                {generateHourSelectOptionsJSX(getOpenHoursForDay(daySelected, monthSelected, currentYear))}
            </select>

            <select className={websiteStyle.timeSelectBox} onChange={this.onMinuteChange}>
                {generateMinuteSelectOptionsJSX(getMinutesForHour(minutes))}
            </select>
        </div>
    );
  }
}