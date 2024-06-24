import { calculateWinner } from '../components/Game';

// Test pour 4 jetons alignés verticalement
test('gagne avec 4 jetons alignés verticalement', () => {
    const squares = Array(42).fill(null);
    squares[0] = 'X';
    squares[7] = 'X';
    squares[14] = 'X';
    squares[21] = 'X';
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo.winner).toBe('X');
});

// Test pour 4 jetons alignés horizontalement
test('gagne avec 4 jetons alignés horizontalement', () => {
    const squares = Array(42).fill(null);
    squares[0] = 'X';
    squares[1] = 'X';
    squares[2] = 'X';
    squares[3] = 'X';
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo.winner).toBe('X');
});

// Test pour 4 jetons alignés en diagonale droite
test('gagne avec 4 jetons alignés en diagonale droite', () => {
    const squares = Array(42).fill(null);
    squares[14] = 'X';
    squares[22] = 'X';
    squares[30] = 'X';
    squares[38] = 'X';
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo.winner).toBe('X');
});

// Test pour 4 jetons alignés en diagonale gauche
test('gagne avec 4 jetons alignés en diagonale gauche', () => {
    const squares = Array(42).fill(null);
    squares[18] = 'X';
    squares[24] = 'X';
    squares[30] = 'X';
    squares[36] = 'X';
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo.winner).toBe('X');
});
