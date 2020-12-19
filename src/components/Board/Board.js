import Tile from '../Tile/Tile';
import './Board.css';


function Board(props) {
    let isBlack = true;
    const tiles = [];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let pos = '';
    
    for (let i = 0; i < 8; i++) {
        isBlack = !isBlack;
        for (let j = 0; j < 8; j++) {
            pos = letters[i] + (j + 1);
            tiles.push(<Tile key={i} isBlack={isBlack} position={pos}></Tile>);
            isBlack = !isBlack;
        }
    }

    return (
        <div className="board">
            {tiles}
        </div>
    );
}

export default Board;