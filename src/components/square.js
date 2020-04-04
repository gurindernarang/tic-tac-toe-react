import React from 'react';

const style = {
    backgroundColor: 'skyblue',
    border: '2px solid darkblue'
};
const square = ({ value, onClick })=> (
    <button style = {style} onClick = {onClick}>
        {value}
    </button>
);

export default square;