import Tile from '../Tile/Tile';
import './Board.css';
import Pawn from '../Pawn/Pawn';
import Rook from '../Rook/Rook';
import Knight from '../Knight/Knight';
import Bishop from '../Bishop/Bishop';
import Queen from '../Queen/Queen';
import King from '../King/King';


function Board(props) {
    let isBlack = true;
    const tiles = [];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const initialPositions = {
        a8: <Rook isBlack={true}></Rook>,
        b8: <Knight isBlack={true}></Knight>,
        c8: <Bishop isBlack={true}></Bishop>,
        d8: <Queen isBlack={true}></Queen>,
        e8: <King isBlack={true}></King>,
        f8: <Bishop isBlack={true}></Bishop>,
        g8: <Knight isBlack={true}></Knight>,
        h8: <Rook isBlack={true}></Rook>,
        a7: <Pawn isBlack={true}></Pawn>,
        b7: <Pawn isBlack={true}></Pawn>,
        c7: <Pawn isBlack={true}></Pawn>,
        d7: <Pawn isBlack={true}></Pawn>,
        e7: <Pawn isBlack={true}></Pawn>,
        f7: <Pawn isBlack={true}></Pawn>,
        g7: <Pawn isBlack={true}></Pawn>,
        h7: <Pawn isBlack={true}></Pawn>,
        a2: <Pawn isBlack={false}></Pawn>,
        b2: <Pawn isBlack={false}></Pawn>,
        c2: <Pawn isBlack={false}></Pawn>,
        d2: <Pawn isBlack={false}></Pawn>,
        e2: <Pawn isBlack={false}></Pawn>,
        f2: <Pawn isBlack={false}></Pawn>,
        g2: <Pawn isBlack={false}></Pawn>,
        h2: <Pawn isBlack={false}></Pawn>,
        a1: <Rook isBlack={false}></Rook>,
        b1: <Knight isBlack={false}></Knight>,
        c1: <Bishop isBlack={false}></Bishop>,
        d1: <Queen isBlack={false}></Queen>,
        e1: <King isBlack={false}></King>,
        f1: <Bishop isBlack={false}></Bishop>,
        g1: <Knight isBlack={false}></Knight>,
        h1: <Rook isBlack={false}></Rook>,
    }
    let pos = '';

    for (let i = 8; i > 0; i--) {
        isBlack = !isBlack;
        for (let j = 0; j < 8; j++) {
            pos = letters[j] + i;
            tiles.push(
                <Tile key={pos} isBlack={isBlack} position={pos}>
                    {initialPositions[pos]}
                </Tile>
            );
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