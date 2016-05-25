import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  name: state.name,
});

class Greeter extends Component {

  static defaultProps = {
    name: 'World',
  };

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

export default connect(mapStateToProps)(Greeter)
