import React from 'react';
import './App.css';
import Game from './components/Game';
import Menu from './components/Menu';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            gameMode: 'classic',
        };
    }

    handleStartGame = (mode) => {
        this.setState({ gameStarted: true, gameMode: mode });
    }

    handleBackToMenu = () => {
        this.setState({ gameStarted: false });
    }

    render() {
        const style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#282c34',
            color: 'white',
        };

        return (
            <div className="App" style={style}>
                {this.state.gameStarted ? <Game onBackToMenu={this.handleBackToMenu} mode={this.state.gameMode} /> : <Menu onStartGame={this.handleStartGame} />}
            </div>
        );
    }
}

export default App;
