import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';

export function getPawnMoveset(selectedPiecePosition: TilePosition, isBlack: boolean | undefined, piecesPosition: TileInformation[], isBlackTurn: boolean) {
    const validMoves = [];
    validMoves.push(PositionUtils.getString(selectedPiecePosition));
    const firstMove = isBlack ? selectedPiecePosition.rank === 6 : selectedPiecePosition.rank === 1;
    const operator = (isBlack ? -1 : +1);

    let tile = {
        file: selectedPiecePosition.file,
        rank: selectedPiecePosition.rank + operator
    };
    let tileString = PositionUtils.getString(tile);
    if (!piecesPosition.some(piece => piece.position === tileString)) {
        validMoves.push(tileString);
    }

    if (firstMove && validMoves.length > 1) {
        tile = { file: tile.file, rank: tile.rank + operator };
        tileString = PositionUtils.getString(tile);
        if (!piecesPosition.some(piece => piece.position === tileString)) {
            validMoves.push(tileString);
        }
    }

    tile = {
        file: selectedPiecePosition.file - 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = PositionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
        validMoves.push(tileString);
    }
    tile = {
        file: selectedPiecePosition.file + 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = PositionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
        validMoves.push(tileString);
    }

    return validMoves;
}