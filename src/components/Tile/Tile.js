import './Tile.css';

function Tile(props) {
    return (
        <div 
            className={`piece ${props.isBlack ? 'black' : 'white'}`} 
            id={props.position}>
            {props.children}
        </div>
    )
}

export default Tile;