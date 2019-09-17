import React from 'react';
import Clock from '../../components/Clock';

const header = () => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5vw',
    alignItems: 'center'
  }

  return (
    <header style={style}>
      <h2>Weather App</h2>
      <Clock />
    </header>
  )
}

export default header;