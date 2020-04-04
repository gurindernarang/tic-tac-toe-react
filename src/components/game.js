import React from 'react';
import Board from './board';
const style = {
    margin: '0 auto',
    fontSize: '30px',
    fontWeight: 600,
    width: '300px',
    textAlign: 'center'
};
const game = ()=> (
    <div style={style}>
        Tic Tac Toe - React
        <Board/>
    </div>
);
export default game;