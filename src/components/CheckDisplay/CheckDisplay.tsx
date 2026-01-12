import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './CheckDisplay.css';

function CheckDisplay(props: any) {
    const [show, setShow] = useState(false);
    const {isCheck, isCheckmate} = props;

    useEffect(() => {
        if (isCheckmate) {
            setShow(true);
            // Don't auto-hide checkmate - game is over
        } else if (isCheck) {
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 2000);
        }
    }, [isCheck, isCheckmate]);

    const displayText = isCheckmate ? 'CHECKMATE' : 'CHECK';

    return (
        <div className="display-wrapper">
            <CSSTransition
                in={show}
                unmountOnExit
                timeout={800}
                classNames="show-check">
                <div className={`check-display ${isCheckmate ? 'checkmate' : ''}`}>{displayText}</div>
            </CSSTransition>
        </div>
    );
}

export default CheckDisplay;