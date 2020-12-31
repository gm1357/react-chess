import { useState } from 'react';

import './Board.css';
import Tile from '../Tile';
import Pawn from '../Pawn';
import Rook from '../Rook';
import Knight from '../Knight';
import Bishop from '../Bishop';
import Queen from '../Queen';
import King from '../King';
import { FilesLetters, PIECE_TYPES } from '../../constants';
import { TileInformation } from '../../models';
import { getValidMoves } from '../../utils';


function Board() {
    const [isBlackTurn, setIsBlackTurn] = useState(false);
    const [pieceSelected, setPieceSelected] = useState<JSX.Element | null>(null);
    const [pieceSelectedPosition, setPieceSelectedPosition] = useState('');
    const [picesPositions, setPiecesPositions] = useState<TileInformation[]>([
        { position: 'a8', piece: <Rook isBlack={true}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: true },
        { position: 'b8', piece: <Knight isBlack={true}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: true },
        { position: 'c8', piece: <Bishop isBlack={true}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: true },
        { position: 'd8', piece: <Queen isBlack={true}></Queen>, pieceType: PIECE_TYPES.QUEEN, selected: false, isBlack: true },
        { position: 'e8', piece: <King isBlack={true}></King>, pieceType: PIECE_TYPES.KING, selected: false, isBlack: true },
        { position: 'f8', piece: <Bishop isBlack={true}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: true },
        { position: 'g8', piece: <Knight isBlack={true}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: true },
        { position: 'h8', piece: <Rook isBlack={true}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: true },
        { position: 'a7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'b7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'c7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'd7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'e7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'f7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'g7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'h7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
        { position: 'a2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'b2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'c2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'd2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'e2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'f2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'g2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'h2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
        { position: 'a1', piece: <Rook isBlack={false}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: false },
        { position: 'b1', piece: <Knight isBlack={false}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: false },
        { position: 'c1', piece: <Bishop isBlack={false}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: false },
        { position: 'd1', piece: <Queen isBlack={false}></Queen>, pieceType: PIECE_TYPES.QUEEN, selected: false, isBlack: false },
        { position: 'e1', piece: <King isBlack={false}></King>, pieceType: PIECE_TYPES.KING, selected: false, isBlack: false },
        { position: 'f1', piece: <Bishop isBlack={false}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: false },
        { position: 'g1', piece: <Knight isBlack={false}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: false },
        { position: 'h1', piece: <Rook isBlack={false}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: false },
    ]);
    let isBlackTile = true;
    const tiles = [];

    const handleClick = (position: string, piece: any) => {
        if (pieceSelected) {
            const pieceType = picesPositions.find(piece => piece.position === pieceSelectedPosition)?.pieceType;
            const newPiecesPosition = picesPositions.filter(piece => piece.position !== pieceSelectedPosition && piece.position !== position);
            newPiecesPosition.push({
                position: position,
                piece: pieceSelected,
                pieceType: pieceType,
                selected: false,
                isBlack: pieceSelected.props.isBlack
            });
            setPiecesPositions(newPiecesPosition);
            if (pieceSelectedPosition !== position) {
                setIsBlackTurn(!isBlackTurn);
            }
            setPieceSelected(null);
            setPieceSelectedPosition('');
        } else {
            if (piece) {
                setPieceSelected(piece);
                setPieceSelectedPosition(position);
                const newPiecesPosition = picesPositions.map(piece => {
                    if (piece.position === position) {
                        piece.selected = true;
                    }
                    return piece;
                });
                setPiecesPositions(newPiecesPosition);
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
                    isValid={validMoves?.some((tile: any) => tile === pos)}
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