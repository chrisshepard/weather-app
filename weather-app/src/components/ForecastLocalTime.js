import React from 'react';

const forecastLocalTime = (props) => {
  //Convert Forecast Time to Local Time
  let tz = props.timeZone;
  let date = props.dateTezt
  console.log(date, tz);
  const localTimeMoreOrLess = tz.charAt(0);
  const localTimeDifferenceValue = parseInt(tz.charAt(2));
  if (localTimeMoreOrLess === '-') {
    let time = moment(date).subtract(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(time);
  } else {
    let time = moment(date).add(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(time);
  }

  return <span>{time}</span>
}

export default forecastLocalTime;