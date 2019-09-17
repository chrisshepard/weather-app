import React from 'react';

const momentTimeConverter = (date, timeZone) => {
  //Convert Forecast Time to Local Time
  console.log(date, timeZone);
  const localTimeMoreOrLess = this.state.tz.charAt(0);
  const localTimeDifferenceValue = parseInt(this.state.tz.charAt(2));
  if (localTimeMoreOrLess === '-') {
    let time = moment(this.state.forecast.data.list[0].dt_txt).subtract(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(time);
  } else {
    let time = moment(this.state.forecast.data.list[0].dt_txt).add(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(time);
  }


  return <span>{time}</span>
}

export default momentTimeConverter;


