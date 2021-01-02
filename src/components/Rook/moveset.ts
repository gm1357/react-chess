import { TileInformation, TilePosition } from '../../models';
import { PositionUtils } from '../../utils';

export function getRookValidMoves(
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
                    if (pieceOnTile.isBlack !== isBlackTurn) {
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