import React from 'react';
import Square from './Square';
//azeezbofjzbl
class Board extends React.Component {
    renderSquare(i) {
        const isWinnerSquare = this.props.winningSquares.includes(i);
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                isWinnerSquare={isWinnerSquare}
            />
        );
    }

    render() {
        const style = {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 50px)',
            gridGap: '10px',
            justifyContent: 'center',
        };
    
        return (
            <div style={style}>
                {[...Array(6)].map((_, rowIndex) => (
                    [...Array(7)].map((_, colIndex) => {
                        const i = rowIndex * 7 + colIndex;
                        return this.renderSquare(i);
                    })
                ))}
            </div>
        );
    }
}

export default Board;
