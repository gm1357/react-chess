import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './CheckDisplay.css';

function CheckDisplay(props: any) {
    const [show, setShow] = useState(false);
    const {isCheck} = props;

    useEffect(() => {
        if (isCheck) {
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 2000);
        }
    }, [isCheck]);

    return (
        <div className="display-wrapper">
            <CSSTransition
                in={show}
                unmountOnExit
                timeout={800}
                classNames="show-check">
                <div className="check-display">CHECK</div>
            </CSSTransition>
        </div>
    );
}

export default CheckDisplay;