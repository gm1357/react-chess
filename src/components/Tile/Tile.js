import './Tile.css';

function Tile(props) {
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
            `}
            id={props.position}
            onClick={handleClick}>
            {props.children}
        </div>
    )
}

export default Tile;