import { calculateWinner } from '../components/Game';
// Test pour vérifier si le jeu est nul
test('match nul', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'X',
                     'O', 'X', 'O', 'X', 'O', 'X',
                     'X', 'O', 'X', 'O', 'X', 'O', 'X',
                     'O', 'X', 'O', 'X', 'O', 'X',
                     'X', 'O', 'X', 'O', 'X', 'O', 'X',
                     'O', 'X', 'O', 'X', 'O', 'X', 'O'];
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo).toBeNull();
});

// Test pour vérifier si le jeu est toujours en cours
test('jeu en cours', () => {
    const squares = Array(42).fill(null);
    squares[0] = 'X';
    squares[1] = 'O';
    squares[2] = 'X';
    squares[3] = 'O';
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo).toBeNull();
});

// Test pour vérifier si le jeu ignore les jetons supplémentaires après avoir gagné
test('ignore les jetons supplémentaires après avoir gagné', () => {
    const squares = Array(42).fill(null);
    squares[0] = 'X';
    squares[1] = 'X';
    squares[2] = 'X';
    squares[3] = 'X';
    squares[4] = 'O'; // Jeton supplémentaire après avoir gagné
    const winnerInfo = calculateWinner(squares);
    expect(winnerInfo.winner).toBe('X');
});
