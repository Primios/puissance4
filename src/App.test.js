import { render, fireEvent } from '@testing-library/react';
import { calculateWinner } from './components/Game';
import App from './App';

// Test pour vérifier si le menu s'affiche au démarrage
test('affiche le menu au démarrage', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Jouer');
    expect(linkElement).toBeInTheDocument();
});

// Test pour vérifier si le jeu commence lorsque le bouton "Commencer le jeu" est cliqué
test('commence le jeu lorsque le bouton "Commencer le jeu" est cliqué', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Jouer'));
    const gameElement = getByText(/Next player: X/i); // Remplacez ceci par le texte qui s'affiche lorsque le jeu commence
    expect(gameElement).toBeInTheDocument();
});

test('commence le jeu lorsque le bouton "Commencer le jeu" est cliqué', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Jouer avec bonus'));
    const gameElement = getByText('Inverser une colonne'); // Remplacez ceci par le texte qui s'affiche lorsque le jeu commence
    expect(gameElement).toBeInTheDocument();
});