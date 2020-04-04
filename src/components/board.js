import React from 'react';
import Square from './square';
const style = {
    border: '1px solid darkblue',
    height: '300px',
    width: '300px',
    margin: '0 auto',
    display: 'grid',
    borderRadius: '4px',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};
const board = ({value, onClick})=> (
    <div style={style}>
        <Square value="11" onClick={ () =>{ console.log("1"); }}/>
        <Square value="22" onClick={ () =>{ console.log("2"); }}/>
        <Square value="33" onClick={ () =>{ console.log("3"); }}/>
        <Square value="44" onClick={ () =>{ console.log("4"); }}/>
        <Square value="55" onClick={ () =>{ console.log("5"); }}/>
        <Square value="66" onClick={ () =>{ console.log("6"); }}/>
        <Square value="77" onClick={ () =>{ console.log("7"); }}/>
        <Square value="88" onClick={ () =>{ console.log("8"); }}/>
        <Square value="99" onClick={ () =>{ console.log("9"); }}/>
    </div>
);
export default board;