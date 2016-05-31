import React, { PropTypes } from 'react';
import { SLIDE_MODES } from './reducer';

const Counter = ({
  value,
  start,
  stop,
  setModeSequential,
  setModeRandom,
  setDelay,
  delay,
  mode,
  counting
}) => (
  <div>
    <button
      onClick={start}
      disabled={counting}
    >
      Count
    </button>
    {' '}
    <button
      onClick={stop}
      disabled={!counting}
    >
      Stop
    </button>
    <label>Random
      <input
        type="checkbox"
        checked={mode === SLIDE_MODES.RANDOM}
        onChange={() => {
          if (mode === SLIDE_MODES.SEQUENTIAL) {
            setModeRandom();
          } else {
            setModeSequential();
          }
        }}
      />
    </label>
    <label>Delay
      <input
        type="number"
        value={delay}
        onChange={(event) =>
          setDelay(parseInt(event.target.value, 10))
        }
      />
    </label>
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
  setModeSequential: PropTypes.func.isRequired,
  setModeRandom: PropTypes.func.isRequired,
  setDelay: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  counting: PropTypes.bool.isRequired,
};

export default Counter;
