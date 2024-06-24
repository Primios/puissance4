import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import Game from '../components/Game';

describe('Game', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<Game />);
        instance = wrapper.instance();
    });

    it('should reverse a column when handleFlip is called', () => {
        // Initialize the game state
        instance.setState({
            history: [{
                squares: Array(42).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            bonusCount: { 'X': 3, 'O': 3 },
        });

        // Fill a column with alternating 'X' and 'O'
        for (let i = 0; i < 6; i++) {
            instance.state.history[0].squares[i * 7] = i % 2 === 0 ? 'X' : 'O';
        }

        // Call handleFlip with the index of the column to reverse
        instance.handleFlip(0);

        // Check that the column has been reversed
        for (let i = 0; i < 6; i++) {
            expect(instance.state.history[1].squares[i * 7]).toEqual(i % 2 !== 0 ? 'X' : 'O');
        }
    });
});


