import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TurnDisplay.css';

function TurnDisplay(props: any) {
    const whoseTurn = (
        <CSSTransition
            key={props.isBlackTurn}
            timeout={800}
            classNames="whose-turn">
            <span>{props.isBlackTurn ? 'BLACK': 'WHITE'}</span>
        </CSSTransition>
    );
    return (
        <span className="turn-display">
            <TransitionGroup className="animation-turn">
                {whoseTurn}
            </TransitionGroup>
            <span>'S TURN</span>
        </span>
    );
}

export default TurnDisplay;