import React from 'react';

const style = {
    backgroundColor: 'skyblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '600'
};
const square = (props) => {
    return (
        <button style = {style} onClick = { () => props.onClick() }>
            {props.value}
        </button>    
    )
};

export default square;