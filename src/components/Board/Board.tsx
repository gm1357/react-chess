import { useEffect, useState } from 'react';

import './Board.css';
import Tile from '../Tile';
import { FilesLetters, INITIAL_POSITIONS } from '../../constants';
import { TileInformation } from '../../models';
import { getValidMoves } from '../../utils';
import { useWindowSize } from '../../hooks/useWindowSize';
import { isCheck } from '../../utils/isCheck';

function Board(props: any) {
    const size = useWindowSize();
    const maximumSideSize = Math.min(size.width ?? 0, size.height ?? 0) * 0.8;
    const [pieceElementSelected, setPieceElementSelected] = useState<JSX.Element | null>(null);
    const [pieceSelectedPosition, setPieceSelectedPosition] = useState('');
    const [picesPositions, setPiecesPositions] = useState<TileInformation[]>(INITIAL_POSITIONS);
    const [lastMovePosition, setLastMovePosition] = useState('');
    const {setCheck, isBlackTurn} = props;
    let isBlackTile = true;
    const tiles = [];

    const handleClick = (position: string, piece: any) => {
        if (pieceElementSelected) {
            const pieceSelected = picesPositions.find(piece => piece.position === pieceSelectedPosition);
            if (pieceSelected) {
                pieceSelected.pieceController.selected = false;
                const newPiecesPosition = picesPositions.filter(piece => piece.position !== pieceSelectedPosition && piece.position !== position);
                newPiecesPosition.push({
                    position: position,
                    piece: pieceElementSelected,
                    pieceController: pieceSelected.pieceController
                });
                setPiecesPositions(newPiecesPosition);
                if (pieceSelectedPosition !== position) {
                    props.setTurn(!props.isBlackTurn);
                    setLastMovePosition(position);
                }
            }
            setPieceElementSelected(null);
            setPieceSelectedPosition('');
        } else {
            if (piece) {
                setPieceElementSelected(piece);
                setPieceSelectedPosition(position);
                const newPiecesPosition = picesPositions.map(piece => {
                    if (piece.position === position) {
                        piece.pieceController.selected = true;
                    }
                    return piece;
                });
                setPiecesPositions(newPiecesPosition);
            }
        }
    };

    const validMoves = getValidMoves(
        picesPositions,
        picesPositions.find(piece => piece.position === pieceSelectedPosition),
        props.isBlackTurn
    );

    useEffect(() => {
        setCheck(
            isCheck(
                picesPositions,
                isBlackTurn,
                lastMovePosition
            )
        );
    });

    let pos: keyof typeof picesPositions;
    for (let rank = 8; rank > 0; rank--) {
        isBlackTile = !isBlackTile;
        for (let file = 0; file < 8; file++) {
            pos = (FilesLetters[file] + rank) as keyof typeof picesPositions;
            // eslint-disable-next-line
            const currentTile = picesPositions.find(tile => tile.position === pos);
            const selected = currentTile?.pieceController.selected;
            const piece = currentTile?.piece;

            tiles.push(
                <Tile
                    key={pos}
                    isBlackTile={isBlackTile}
                    position={pos}
                    isSelected={selected}
                    // eslint-disable-next-line
                    isValid={validMoves?.some((tile: any) => tile === pos)}
                    pieceSelected={pieceElementSelected !== null}
                    handleClick={handleClick}>
                    {piece}
                </Tile>
            );
            isBlackTile = !isBlackTile;
        }
    }

    return (
        <div className="board" style={{width: maximumSideSize, height: maximumSideSize}}>
            {tiles}
        </div>
    );
}

export default Board;