import { render, fireEvent } from '@testing-library/react';
import Game from '../components/Game';
import App from '../App';

// Test to check if the bonus buttons are present in bonus mode but not in classic mode
test('bonus buttons are present in bonus mode', () => {
    const { queryByText } = render(<App />);
    fireEvent.click(queryByText(/Jouer avec bonus/i));
    expect(queryByText(/Inverser une colonne/i)).toBeInTheDocument();
    expect(queryByText(/Inverser toutes les colonnes/i)).toBeInTheDocument();
});

test('bonus buttons are not present in classic mode', () => {
    const { queryByText } = render(<App />);
    fireEvent.click(queryByText('Jouer'));
    expect(queryByText(/Inverser une colonne/i)).not.toBeInTheDocument();
    expect(queryByText(/Inverser toutes les colonnes/i)).not.toBeInTheDocument();
});

test('no more bonuses after 3 uses', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Jouer avec bonus/i));
    const flipButton = getByText(/Inverser une colonne/i);
    fireEvent.click(flipButton);
    fireEvent.click(flipButton);
    fireEvent.click(flipButton);
    fireEvent.click(flipButton);
    fireEvent.click(flipButton);
    fireEvent.click(flipButton);
    expect(flipButton).toBeDisabled();
});

test('bonus count is correctly displayed', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Jouer avec bonus/i));
    expect(getByText(/Bonus restant pour X: 3/i)).toBeInTheDocument();
    const flipButton = getByText(/Inverser une colonne/i);
    fireEvent.click(flipButton);
    expect(getByText(/Bonus restant pour X: 2/i)).toBeInTheDocument();
});