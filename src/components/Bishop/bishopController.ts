import { PieceController } from '../../models/pieceController';
import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';
import { PIECE_TYPES } from '../../constants';

export class BishopController implements PieceController {

    public pieceType = PIECE_TYPES.BISHOP;

    constructor(
        public isBlack: boolean,
        public selected: boolean
    ) {}

    public getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ) {
        const validMoves = [];
        validMoves.push(PositionUtils.getString(selectedPiecePosition));

        [-1, 1].forEach(fileDirection => {
            [-1, 1].forEach(rankDirection => {
                let tileToMove = {
                    file: selectedPiecePosition.file + fileDirection,
                    rank: selectedPiecePosition.rank + rankDirection
                }
                let tileToMoveString = PositionUtils.getString(tileToMove);
                let pieceOnTile = piecesPosition.find(piece => piece.position === tileToMoveString);

                while (!pieceOnTile
                        && (tileToMove.file >= 0 && tileToMove.rank < 8)
                        && (tileToMove.file >= 0 && tileToMove.file < 8)) {
                    validMoves.push(tileToMoveString);
                    tileToMove.file += fileDirection;
                    tileToMove.rank += rankDirection;
                    tileToMoveString = PositionUtils.getString(tileToMove);
                    // eslint-disable-next-line
                    pieceOnTile = piecesPosition.find(piece => piece.position === tileToMoveString);
                }

                if (pieceOnTile && pieceOnTile.pieceController.isBlack !== isBlackTurn) {
                    validMoves.push(tileToMoveString);
                }
            });
        });

        return validMoves;
    }
}