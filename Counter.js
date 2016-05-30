/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';

const Counter = ({ value, start, stop }) => (
  <div>
    <button onClick={start}>
      Count
    </button>
    {' '}
    <button onClick={stop}>
      Stop
    </button>
    <hr />
    <div>
      Counter value: {value}
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
};

export default Counter;
