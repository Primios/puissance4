# React Connect Four Game

Author: HENRIQUES Valentin

This is a Connect Four game implemented in React.

## Game Description

Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

## Game Modes

- **Classic Mode**: This is the traditional Connect Four game. Players take turns to drop their colored discs into the grid. The first player to connect four discs in a row, column, or diagonal wins the game.

- **Bonus Mode**: In addition to the classic gameplay, each player has the ability to reverse a column or all columns a limited number of times. This adds an extra layer of strategy to the game, as players must decide when to use their bonuses for maximum effect. Please note that reversing a column or all columns does not trigger a win condition. The win condition is only checked after a traditional move (placing a piece on the board).

## Components

- `App`: The main component that handles the game state and renders either the `Menu` or `Game` component.
- `Menu`: Allows the user to start a classic game or a game with bonuses.
- `Game`: Handles the game logic and renders the `Board`.
- `Square`: Represents a single square on the game board.

## Getting Started

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm start`.
4. Open `http://localhost:3000` in your browser.

## Testing

Run the tests with `npm test`.

## Building

Build the App for deployement with `npm build`.
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
