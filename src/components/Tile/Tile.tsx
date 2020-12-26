import './Tile.css';

function Tile(props: any) {
    const handleClick = () => {
        if (props.isValid) {
            props.handleClick(props.position, props.children)
        }
    };
    return (
        <div 
            className={`
                piece
                ${props.isBlackTile ? 'black' : 'white'}
                ${props.isSelected ? 'selected' : ''}
                ${props.isValid ? 'valid' : ''}
                ${props.pieceSelected ? 'on-selection' : ''}
            `}
            id={props.position}
            onClick={handleClick}>
            {props.children}
            {!props.children ? <span className="circle"></span> : ''}
        </div>
    )
}

export default Tile;