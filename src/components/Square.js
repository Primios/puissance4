import React from 'react';

function Square(props) {
    const style = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.value === 'X' ? 'red' : props.value === 'O' ? 'yellow' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
        color: 'white',
        boxShadow: props.isWinnerSquare ? '0 0 10px 5px white' : 'none',
    };
    
    return (
        <button style={style} onClick={props.onClick}>
            {props.value}
        </button>
    );
    
}


export default Square;
