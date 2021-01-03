import './TurnDisplay.css';

function TurnDisplay(props: any) {
    const whoseTurn = <span className="whose-turn">{props.isBlackTurn ? 'BLACK': 'WHITE'}</span>
    return (
        <span className="turn-display">{whoseTurn}'S TURN</span>
    );
}

export default TurnDisplay;