import React from 'react';

class Menu extends React.Component {
    render() {
        const style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            fontSize: '2em',
            backgroundColor: '#282c34',
            color: 'white',
        };

        const buttonStyle = {
            marginTop: '20px',
            fontSize: '1em',
            padding: '10px 20px',
        };

        return (
            <div style={style}>
                <h1>Puissance 4</h1>
                <button style={buttonStyle} onClick={() => this.props.onStartGame('classic')}>Jouer</button>
                <button style={buttonStyle} onClick={() => this.props.onStartGame('bonus')}>Jouer avec bonus</button>
            </div>
        );
    }
}

export default Menu;
