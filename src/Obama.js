import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const obamaSource = {
  beginDrag(props) {
    return {type: 'obama', obamaId: props.id};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Obama extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <img src='https://www.askideas.com/media/38/Obama-With-Sad-Face-Funny-Picture.jpg'  height='50px' style={{'paddingLeft':'25px', 'paddingTop': '25px' }} width='50px'/>
      </div>
    );
  }
}

Obama.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.OBAMA, obamaSource, collect)(Obama);