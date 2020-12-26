import Tile from '../Tile/Tile';
import './Board.css';
import Pawn from '../Pawn/Pawn';
import Rook from '../Rook/Rook';
import Knight from '../Knight/Knight';
import Bishop from '../Bishop/Bishop';
import Queen from '../Queen/Queen';
import King from '../King/King';
import { useState } from 'react';
import { FilesLetters } from '../../constants/filesLetters';
import { TileInformation } from '../../models/tileInformation';
import getValidMoves from '../../utils/getValidMoves';


function Board() {
    const [isBlackTurn, setIsBlackTurn] = useState(false);
    const [pieceSelected, setPieceSelected] = useState<JSX.Element | null>(null);
    const [pieceSelectedPosition, setPieceSelectedPosition] = useState('');
    const [picesPositions, setPiecesPositions] = useState<TileInformation[]>([
        { position: 'a8', piece: <Rook isBlack={true}></Rook>, selected: false, isBlack: true },
        { position: 'b8', piece: <Knight isBlack={true}></Knight>, selected: false, isBlack: true },
        { position: 'c8', piece: <Bishop isBlack={true}></Bishop>, selected: false, isBlack: true },
        { position: 'd8', piece: <Queen isBlack={true}></Queen>, selected: false, isBlack: true },
        { position: 'e8', piece: <King isBlack={true}></King>, selected: false, isBlack: true },
        { position: 'f8', piece: <Bishop isBlack={true}></Bishop>, selected: false, isBlack: true },
        { position: 'g8', piece: <Knight isBlack={true}></Knight>, selected: false, isBlack: true },
        { position: 'h8', piece: <Rook isBlack={true}></Rook>, selected: false, isBlack: true },
        { position: 'a7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'b7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'c7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'd7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'e7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'f7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'g7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'h7', piece: <Pawn isBlack={true}></Pawn>, selected: false, isBlack: true },
        { position: 'a2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'b2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'c2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'd2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'e2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'f2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'g2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'h2', piece: <Pawn isBlack={false}></Pawn>, selected: false, isBlack: false },
        { position: 'a1', piece: <Rook isBlack={false}></Rook>, selected: false, isBlack: false },
        { position: 'b1', piece: <Knight isBlack={false}></Knight>, selected: false, isBlack: false },
        { position: 'c1', piece: <Bishop isBlack={false}></Bishop>, selected: false, isBlack: false },
        { position: 'd1', piece: <Queen isBlack={false}></Queen>, selected: false, isBlack: false },
        { position: 'e1', piece: <King isBlack={false}></King>, selected: false, isBlack: false },
        { position: 'f1', piece: <Bishop isBlack={false}></Bishop>, selected: false, isBlack: false },
        { position: 'g1', piece: <Knight isBlack={false}></Knight>, selected: false, isBlack: false },
        { position: 'h1', piece: <Rook isBlack={false}></Rook>, selected: false, isBlack: false },
    ]);

    let isBlackTile = true;
    const tiles = [];

    const handleClick = (position: string, piece: any) => {
        if (pieceSelected) {
            const currentPiecesPosition = picesPositions.filter(piece => piece.position !== pieceSelectedPosition && piece.position !== position);
            currentPiecesPosition.push({ position: position, piece: pieceSelected, selected: false, isBlack: pieceSelected.props.isBlack });
            setPiecesPositions(currentPiecesPosition);
            if (pieceSelectedPosition !== position) {
                setIsBlackTurn(!isBlackTurn);
            }
            setPieceSelected(null);
            setPieceSelectedPosition('');
        } else {
            if (piece) {
                setPieceSelected(piece);
                setPieceSelectedPosition(position);
                const currentPiecesPosition = picesPositions.filter(piece => piece.position !== position);
                currentPiecesPosition.push({ position: position, piece: piece, selected: true, isBlack: piece.props.isBlack });
                setPiecesPositions(currentPiecesPosition);
            }
        }
    };

    const validMoves = getValidMoves(picesPositions, picesPositions.find(piece => piece.position === pieceSelectedPosition), isBlackTurn);

    let pos: keyof typeof picesPositions;
    for (let rank = 8; rank > 0; rank--) {
        isBlackTile = !isBlackTile;
        for (let file = 0; file < 8; file++) {
            pos = (FilesLetters[file] + rank) as keyof typeof picesPositions;
            // eslint-disable-next-line
            const currentTile = picesPositions.find(tile => tile.position === pos);
            const selected = currentTile?.selected;
            const piece = currentTile?.piece;

            tiles.push(
                <Tile
                    key={pos}
                    isBlackTile={isBlackTile}
                    position={pos}
                    isSelected={selected}
                    // eslint-disable-next-line
                    isValid={validMoves?.some(tile => tile === pos)}
                    pieceSelected={pieceSelected !== null}
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