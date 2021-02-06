import { PieceLogic } from "../../interfaces/pieceLogic";
import { TileInformation, TilePosition } from "../../models";
import { PositionUtils } from "../../utils";

export class KingLogic implements PieceLogic {

    public getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ) {
        const validMoves = [];
        const initialPosition = PositionUtils.getString(selectedPiecePosition);
        validMoves.push(initialPosition);
        [-1, 0, 1].forEach(fileDirection => {
            [-1, 0, 1].forEach(rankDirection => {
                const tileToMove = PositionUtils.getString({
                    file: selectedPiecePosition.file + fileDirection,
                    rank: selectedPiecePosition.rank + rankDirection,
                });

                const pieceOnTile = piecesPosition.find(piece => piece.position === tileToMove);
                if (!pieceOnTile
                    || (pieceOnTile
                        && (tileToMove === initialPosition || pieceOnTile.isBlack !== isBlackTurn))) {
                    validMoves.push(tileToMove);
                }
            });
        });

        return validMoves;
    }
}