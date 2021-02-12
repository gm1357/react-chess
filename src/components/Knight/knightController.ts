import { PieceController } from '../../models/pieceController';
import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';
import { PIECE_TYPES } from '../../constants';

export class KnightController implements PieceController {

    public pieceType = PIECE_TYPES.KNIGHT;

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

        [-1, 1].forEach(direction => {
            ['rank', 'file'].forEach(line => {
                [-1, 1].forEach(subdirection => {
                    const tileToMove = {
                        file: selectedPiecePosition.file + (line === 'rank' ? 2 * direction : 1 * direction * subdirection),
                        rank: selectedPiecePosition.rank + (line === 'rank' ? 1 * direction * subdirection : 2 * direction)
                    };

                    const tileToMoveString = PositionUtils.getString(tileToMove);

                    const pieceOnTile = piecesPosition.find(piece => piece.position === tileToMoveString);
                    if (!pieceOnTile || (pieceOnTile && pieceOnTile.pieceController.isBlack !== isBlackTurn)) {
                        validMoves.push(tileToMoveString);
                    }
                });
            });
        });

        return validMoves;
    }
}