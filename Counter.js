import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SLIDE_MODES } from './redux/constants';
import {
  start,
  stop,
  setModeSequential,
  setModeRandom,
  setDelay,
} from './redux/actions';

const Counter = (props) => (
  <div>
    <button
      onClick={props.start}
      disabled={props.playing}
    >
      Count
    </button>
    &nbsp;
    <button
      onClick={props.stop}
      disabled={!props.playing}
    >
      Stop
    </button>
    &nbsp;
    <label>Random
      <input
        type="checkbox"
        checked={props.mode === SLIDE_MODES.RANDOM}
        onChange={
          props.mode === SLIDE_MODES.SEQUENTIAL ?
          props.setModeRandom :
          props.setModeSequential
        }
      />
    </label>
    &nbsp;
    <label>Delay&nbsp;
      <input
        type="number"
        defaultValue={props.delay}
        onBlur={({ target }) =>
          target.value && props.setDelay(parseInt(target.value, 10))
        }
      />
    </label>
    <hr />
    <div>
      Counter value: {props.slide}
    </div>
  </div>
);

Counter.propTypes = {
  slide: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  setModeSequential: PropTypes.func.isRequired,
  setModeRandom: PropTypes.func.isRequired,
  setDelay: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  slide: state.slide,
  delay: state.delay,
  mode: state.mode,
  playing: state.playing,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    start,
    stop,
    setModeSequential,
    setModeRandom,
    setDelay,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
