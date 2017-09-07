import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'red' : 'blue';
    const stroke = black ? 'blue' : 'red';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100px',
        height: '100px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};