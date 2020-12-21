import './Tile.css';

function Tile(props) {
    const handleClick = props.handleClick.bind(null, props.position, props.children);
    return (
        <div 
            className={`
                piece
                ${props.isBlack ? 'black' : 'white'}
                ${props.isSelected ? 'selected' : ''}
                ${props.isValid ? 'valid' : ''}
            `}
            id={props.position}
            onClick={handleClick}>
            {props.children}
        </div>
    )
}

export default Tile;