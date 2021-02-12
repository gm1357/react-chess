import { PieceController } from '../../models/pieceController';
import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';
import { PIECE_TYPES } from '../../constants';

export class RookController implements PieceController {

    public pieceType = PIECE_TYPES.QUEEN;

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

        ['rank', 'file'].forEach(line => {
            const currentPos: number = selectedPiecePosition[line as keyof TilePosition];
            const staticPos = line === 'rank' ? selectedPiecePosition.file : selectedPiecePosition.rank;

            [-1, 1].forEach(direction => {
                const isAscending = direction > 0;

                let movingPos = currentPos + direction;
                while(isAscending ? movingPos < 8 : movingPos >= 0) {
                    const movePosition = PositionUtils.getString({
                        file: line === 'rank' ? staticPos : movingPos,
                        rank: line === 'rank' ? movingPos : staticPos
                    });

                    const pieceOnTile = piecesPosition.find(piece => piece.position === movePosition)
                    if (pieceOnTile) {
                        if (pieceOnTile.pieceController.isBlack !== isBlackTurn) {
                            validMoves.push(movePosition);
                        }
                        break;
                    } else {
                        validMoves.push(movePosition);
                    }

                    movingPos = movingPos + direction;
                }
            });
        });

        return validMoves;
    }
}