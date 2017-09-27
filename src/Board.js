import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Obama from './Obama';



class Board extends Component {
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
          <div key={i}
               style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x}
                         y={y}>
              {this.renderPiece(x, y)}
            </BoardSquare>
          </div>
        );
      }
      
      renderPiece(x, y) {
        for (var i = 0; i <this.props.allknightpositions.length; i++) {
            const [knightX, knightY, knightId] = this.props.allknightpositions[i];
            if (x=== knightX && y === knightY) {
                return <Knight id={knightId}/>
            }          
        }
        for (var i = 0; i <this.props.allobamapositions.length; i++) {
            const [obamaX, obamaY, obamaId] = this.props.allobamapositions[i];
            if (x=== obamaX && y === obamaY) {
                return <Obama id={obamaId}/>
            }          
        }
      }

  render() {
    
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '800px',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

// Board.propTypes = {
//   knightPosition: PropTypes.arrayOf(
//     PropTypes.number.isRequired
//   ).isRequired
// };

export default DragDropContext(HTML5Backend)(Board);
