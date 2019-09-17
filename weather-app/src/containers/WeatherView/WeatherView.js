import React, { Component } from 'react';
import Loading from '../../components/Loading';


import axios from 'axios';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";

class WeatherView extends Component {
  state = { lat: null, long: null, errorMessage: '', weather: '' };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        axios.get(baseURL + 'data/2.5/weather?APPID=' + apiKey + '&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=Imperial').then((res) => {
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            weather: res
          });
          console.log(this.state);
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