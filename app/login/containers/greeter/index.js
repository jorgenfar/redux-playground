import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeName } from '../../redux';

const mapStateToProps = (state) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    changeName,
  }, dispatch);

class Greeter extends Component {

  static defaultProps = {
    name: 'World',
  };

  static propTypes = {
    name: PropTypes.string,
    changeName: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <button
          onClick={() => this.props.changeName()}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeter)
