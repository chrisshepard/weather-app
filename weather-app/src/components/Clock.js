import React from 'react';
import moment from 'moment';

class Clock extends React.Component{
  state = {date: moment().format('MMMM Do YYYY, h:mm a, (Z)')};

  componentDidMount(){
    setInterval(
      () => this.setState({ date: moment().format('MMMM Do YYYY, h:mm a (Z)') }),
      10000
    );
  }
  
  render() {
    return <div> {this.state.date} </div>;
  }
}

export default Clock;