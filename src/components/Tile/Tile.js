import './Tile.css';

function Tile(props) {
    return (
        <div 
            className={props.isBlack ? 'black' : 'white'} 
            id={props.position}>
        </div>
    )
}

export default Tile;