import React from 'react';
import Board from './Board';

export function calculateWinner(squares) {
    // Check horizontal lines
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (squares[i * 7 + j] && squares[i * 7 + j] === squares[i * 7 + j + 1] && squares[i * 7 + j] === squares[i * 7 + j + 2] && squares[i * 7 + j] === squares[i * 7 + j + 3]) {
                return {
                    winner: squares[i * 7 + j],
                    winningSquares: [i * 7 + j, i * 7 + j + 1, i * 7 + j + 2, i * 7 + j + 3]
                };
            }
        }
    }

    // Check vertical lines
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (squares[i * 7 + j] && squares[i * 7 + j] === squares[(i + 1) * 7 + j] && squares[i * 7 + j] === squares[(i + 2) * 7 + j] && squares[i * 7 + j] === squares[(i + 3) * 7 + j]) {
                return {
                    winner: squares[i * 7 + j],
                    winningSquares: [i * 7 + j, (i + 1) * 7 + j, (i + 2) * 7 + j, (i + 3) * 7 + j]
                };
            }
        }
    }

    // Check diagonals (bottom left to top right)
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (squares[i * 7 + j] && squares[i * 7 + j] === squares[(i - 1) * 7 + j + 1] && squares[i * 7 + j] === squares[(i - 2) * 7 + j + 2] && squares[i * 7 + j] === squares[(i - 3) * 7 + j + 3]) {
                return {
                    winner: squares[i * 7 + j],
                    winningSquares: [i * 7 + j, (i - 1) * 7 + j + 1, (i - 2) * 7 + j + 2, (i - 3) * 7 + j + 3]
                };
            }
        }
    }

    // Check diagonals (top left to bottom right)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (squares[i * 7 + j] && squares[i * 7 + j] === squares[(i + 1) * 7 + j + 1] && squares[i * 7 + j] === squares[(i + 2) * 7 + j + 2] && squares[i * 7 + j] === squares[(i + 3) * 7 + j + 3]) {
                return {
                    winner: squares[i * 7 + j],
                    winningSquares: [i * 7 + j, (i + 1) * 7 + j + 1, (i + 2) * 7 + j + 2, (i + 3) * 7 + j + 3]
                };
            }
        }
    }

    return null;
}


    class Game extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                history: [{
                    squares: Array(42).fill(null),
                    winningSquares: [], // Ajout de la propriété winningSquares
                }],
                stepNumber: 0,
                xIsNext: true,
                gravity: Array(7).fill(false), // Ajout de la propriété gravity
                bonusCount: { 'X': 3, 'O': 3 }, // Chaque joueur commence avec 3 bonus
            };
        }
        

        handleClick(i) {
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
        
            if (calculateWinner(squares) || squares[i]) {
                return;
            }
        
            let row;
            if (this.state.gravity[i % 7]) {
                row = 0;
                while (row < 6 && squares[row * 7 + (i % 7)] !== null) {
                    row++;
                }
            } else {
                row = 5;
                while (row >= 0 && squares[row * 7 + (i % 7)] !== null) {
                    row--;
                }
            }
        
            squares[row * 7 + (i % 7)] = this.state.xIsNext ? 'X' : 'O';
        
            const winnerInfo = calculateWinner(current.squares);
            const winner = winnerInfo ? winnerInfo.winner : null;
            const winningSquares = winnerInfo ? winnerInfo.winningSquares : [];
        
            this.setState({
                history: history.concat([{
                    squares: squares,
                    winningSquares: winningSquares, // Assurez-vous que cette ligne est présente
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
                gravity: this.state.gravity,
            });
        }
        

        handleRestart = () => {
            this.setState({
                history: [{
                    squares: Array(42).fill(null),
                    winningSquares: [], // Ajoutez cette ligne
                }],
                stepNumber: 0,
                xIsNext: true,
            });
        }
        
        handleFlip = () => {
            if (this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] <= 0) {
                alert("Vous n'avez plus de bonus restants!");
                return;
            }
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            
            // Générer un nombre aléatoire pour sélectionner une colonne
            const col = Math.floor(Math.random() * 7);
        
            // Créer un tableau pour stocker les jetons de la colonne
            let column = [];
            for (let i = 0; i < 6; i++) {
                column.push(squares[i * 7 + col]);
            }
    
            column = column.reverse().filter(val => val !== null);
            while (column.length < 6) {
                column.unshift(null);
            }
    
            for (let i = 0; i < 6; i++) {
                squares[i * 7 + col] = column[i];
            }
            
            this.setState({
                history: history.concat([{
                    squares: squares,
                    winningSquares: [], // Assurez-vous que cette ligne est présente
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
                bonusCount: {
                    ...this.state.bonusCount,
                    [this.state.xIsNext ? 'X' : 'O']: this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] - 1
                },
            });            
        }

        handleFlipAll = () => {
            if (this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] <= 0) {
                alert("Vous n'avez plus de bonus restants!");
                return;
            }
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
    
            // Inverser chaque colonne
            for (let col = 0; col < 7; col++) {
                let column = [];
                for (let i = 0; i < 6; i++) {
                    column.push(squares[i * 7 + col]);
                }
    
                column = column.reverse().filter(val => val !== null);
                while (column.length < 6) {
                    column.unshift(null);
                }
    
                for (let i = 0; i < 6; i++) {
                    squares[i * 7 + col] = column[i];
                }
            }
    
            this.setState({
                history: history.concat([{
                    squares: squares,
                    winningSquares: [], // Assurez-vous que cette ligne est présente
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
                bonusCount: {
                    ...this.state.bonusCount,
                    [this.state.xIsNext ? 'X' : 'O']: this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] - 1
                },
            });            
        }

        render() {
            const history = this.state.history;
            const current = history[this.state.stepNumber];
            const winnerInfo = calculateWinner(current.squares);
            const winner = winnerInfo ? winnerInfo.winner : null;
            const winningSquares = winnerInfo ? winnerInfo.winningSquares : [];
        
            let status;
            let isGameOver = false;
            if (winner) {
                status = 'Winner: ' + winner;
                isGameOver = true;
            } else if (current.squares.every(square => square !== null)) {
                status = 'Match nul';
                isGameOver = true;
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        
            const counterStyle = {
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                backgroundColor: '#282c34',
                color: 'white',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
            };
    
            const gameStyle = {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            };
    
            return (
                <div className="game" style={gameStyle}>
                    {/* Afficher le nombre de bonus restant pour le joueur 'X' */}
                    {this.props.mode === 'bonus' &&(
                        <div style={counterStyle}>
                            Bonus restant pour X: {this.state.bonusCount['X']}
                        </div>
                    )}
    
                    <div>
                        <div className="game-board">
                            <Board
                                squares={current.squares}
                                winningSquares={winningSquares}
                                onClick={(i) => this.handleClick(i)}
                            />
                        </div>
                        <div className="game-info">
                            <div>{status}</div>
                            {isGameOver && (
                                <div>
                                    <button onClick={this.handleRestart}>Rejouer</button>
                                    <button onClick={this.props.onBackToMenu}>Revenir au menu</button>
                                </div>
                            )}
                            {!isGameOver && this.props.mode === 'bonus' && (
                                <div>
                                    <button onClick={this.handleFlip} disabled={this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] <= 0}>
                                        Inverser une colonne
                                    </button>
                                    <button onClick={this.handleFlipAll} disabled={this.state.bonusCount[this.state.xIsNext ? 'X' : 'O'] <= 0}>
                                        Inverser toutes les colonnes
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
    
                    {/* Afficher le nombre de bonus restant pour le joueur 'O' */}
                    {this.props.mode === 'bonus' &&(
                        <div style={counterStyle}>
                            Bonus restant pour O: {this.state.bonusCount['O']}
                        </div>
                    )}
                </div>
            );
        }
    }
    
    export default Game;