import React from 'react';
import './App.css';

import Header from './containers/Header/Header';
import WeatherView from './containers/WeatherView/WeatherView';

function App() {

  return (
    <div className="App">
     <Header />
     <WeatherView />
    </div>
  );
}

export default App;
