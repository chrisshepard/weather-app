import React, { Component } from 'react';
import Loading from '../../components/Loading';


import axios from 'axios';
import moment from 'moment';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";

class WeatherView extends Component {
  state = { lat: null, long: null, errorMessage: '', weather: '', forecast: '', tz: moment().format('Z') };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        axios.get(baseURL + 'data/2.5/weather?APPID=' + apiKey + '&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=Imperial').then((res) => {
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            weather: res
          });

        })
        axios.get(baseURL + 'data/2.5/forecast?APPID=' + apiKey + '&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=Imperial').then((res) => {
          this.setState({
            forecast: res
          });
          console.log(this.state);

          /*
          console.log(this.state.forecast.data.list[0], this.state.tz);
          const localTimeMoreOrLess = this.state.tz.charAt(0);
          const localTimeDifferenceValue = parseInt(this.state.tz.charAt(2));
          if (localTimeMoreOrLess === '-') {
            const time = moment(this.state.forecast.data.list[0].dt_txt).subtract(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
            console.log(time);
          } else {
            const time = moment(this.state.forecast.data.list[0].dt_txt).add(localTimeDifferenceValue, 'hours').format("dddd, MMMM Do YYYY, h:mm:ss a");
            console.log(time);
          } */
        })

      },
      err => this.setState({ errorMessage: err.message })
    );
  }





  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <CurrentWeather data={this.state.weather} />
          <span>Success</span>
        </div>
      );
    }

    return <div><Loading message="Please Allow Location Services" /></div>

  }
}

export default WeatherView