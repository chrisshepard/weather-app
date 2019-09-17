import React from 'react';

const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message} <br/>Getting Your ForeCast</div>
    </div>
  );

}

export default Loading;