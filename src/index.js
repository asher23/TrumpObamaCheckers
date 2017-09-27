import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe((knightPosition, obamaPosition, allobamapositions,allknightpositions) => {
  ReactDOM.render(
    <Board knightPosition={knightPosition} 
           obamaPosition={obamaPosition} 
           allobamapositions={allobamapositions}
           allknightpositions={allknightpositions}  />,
    rootEl
  )
})
