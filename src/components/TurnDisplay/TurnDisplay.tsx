import { CSSTransitionGroup } from 'react-transition-group';

import './TurnDisplay.css';

function TurnDisplay(props: any) {
    const whoseTurn = <span key={props.isBlackTurn} className="whose-turn">{props.isBlackTurn ? 'BLACK': 'WHITE'}</span>
    return (
        <span className="turn-display">
            <CSSTransitionGroup
                className="animation-turn"
                transitionName="whose-turn"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}>
                {whoseTurn}
            </CSSTransitionGroup>
            <span>'S TURN</span>
        </span>
    );
}

export default TurnDisplay;