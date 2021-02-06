import { PieceLogic } from '../../interfaces/pieceLogic';
import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';

export class PawnLogic implements PieceLogic {

    public getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ) {
        const validMoves = [];
        validMoves.push(PositionUtils.getString(selectedPiecePosition));
        const firstMove = isBlackTurn ? selectedPiecePosition.rank === 6 : selectedPiecePosition.rank === 1;
        const operator = isBlackTurn ? -1 : +1;

        let tile = {
            file: selectedPiecePosition.file,
            rank: selectedPiecePosition.rank + operator
        };
        let tileString = PositionUtils.getString(tile);
        if (!piecesPosition.some(piece => piece.position === tileString)) {
            validMoves.push(tileString);
        }

        if (firstMove && validMoves.length > 1) {
            tile.rank += operator;
            tileString = PositionUtils.getString(tile);
            if (!piecesPosition.some(piece => piece.position === tileString)) {
                validMoves.push(tileString);
            }
        }

        [-1, 1].forEach(atackDirection => {
            tile = {
                file: selectedPiecePosition.file + atackDirection,
                rank: selectedPiecePosition.rank + operator
            };
            tileString = PositionUtils.getString(tile);
            if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
                validMoves.push(tileString);
            }
        });

        return validMoves;
    }
}