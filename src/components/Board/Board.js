import Tile from '../Tile/Tile';
import './Board.css';
import Pawn from '../Pawn/Pawn';
import Rook from '../Rook/Rook';
import Knight from '../Knight/Knight';
import Bishop from '../Bishop/Bishop';
import Queen from '../Queen/Queen';
import King from '../King/King';
import { useState } from 'react';


function Board(props) {
    const [isBlackTurn, setIsBlackTurn] = useState(false);
    const [pieceSelected, setPieceSelected] = useState(null);
    const [pieceSelectedPosition, setPieceSelectedPosition] = useState('');
    const [picesPositions, setPiecesPositions] = useState({
        a8: { piece: <Rook isBlack={true}></Rook>, selected: false} ,
        b8: { piece: <Knight isBlack={true}></Knight>, selected: false },
        c8: { piece: <Bishop isBlack={true}></Bishop>, selected: false },
        d8: { piece: <Queen isBlack={true}></Queen>, selected: false },
        e8: { piece: <King isBlack={true}></King>, selected: false },
        f8: { piece: <Bishop isBlack={true}></Bishop>, selected: false },
        g8: { piece: <Knight isBlack={true}></Knight>, selected: false },
        h8: { piece: <Rook isBlack={true}></Rook>, selected: false },
        a7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        b7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        c7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        d7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        e7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        f7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        g7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        h7: { piece: <Pawn isBlack={true}></Pawn>, selected: false },
        a2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        b2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        c2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        d2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        e2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        f2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        g2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        h2: { piece: <Pawn isBlack={false}></Pawn>, selected: false },
        a1: { piece: <Rook isBlack={false}></Rook>, selected: false },
        b1: { piece: <Knight isBlack={false}></Knight>, selected: false },
        c1: { piece: <Bishop isBlack={false}></Bishop>, selected: false },
        d1: { piece: <Queen isBlack={false}></Queen>, selected: false },
        e1: { piece: <King isBlack={false}></King>, selected: false },
        f1: { piece: <Bishop isBlack={false}></Bishop>, selected: false },
        g1: { piece: <Knight isBlack={false}></Knight>, selected: false },
        h1: { piece: <Rook isBlack={false}></Rook>, selected: false },
    });

    let isBlackTile = true;
    const tiles = [];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const handleClick = (position, piece) => {
        if (pieceSelected) {
            setPiecesPositions({
                ...picesPositions,
                [pieceSelectedPosition]: null,
                [position]: { piece: pieceSelected, selected: false }
            });
            if (pieceSelectedPosition !== position) {
                setIsBlackTurn(!isBlackTurn);
            }
            setPieceSelected(null);
            setPieceSelectedPosition('');
        } else {
            if (piece) {
                setPieceSelected(piece);
                setPieceSelectedPosition(position);
                setPiecesPositions({
                    ...picesPositions,
                    [position]: { piece: piece, selected: true }
                });
            }
        }
    };

    let pos = '';
    for (let i = 8; i > 0; i--) {
        isBlackTile = !isBlackTile;
        for (let j = 0; j < 8; j++) {
            pos = letters[j] + i;
            const selected = picesPositions[pos]?.selected;
            const piece = picesPositions[pos]?.piece;

            let isValidMove = false;
            if (!pieceSelected) {
                isValidMove = piece != null && piece?.props.isBlack === isBlackTurn;
            } else {
                isValidMove = piece == null || piece?.props.isBlack !== isBlackTurn;
            }

            tiles.push(
                <Tile
                    key={pos}
                    isBlackTile={isBlackTile}
                    position={pos}
                    isSelected={selected}
                    isValid={isValidMove}
                    handleClick={handleClick}>
                    {piece}
                </Tile>
            );
            isBlackTile = !isBlackTile;
        }
    }

    return (
        <div className="board">
            {tiles}
        </div>
    );
}

export default Board;