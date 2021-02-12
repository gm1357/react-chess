import { PieceController } from "../../models/pieceController";
import { TileInformation, TilePosition } from "../../models";
import { PositionUtils } from "../../utils";
import { PIECE_TYPES } from "../../constants";

export class KingController implements PieceController {

    public pieceType = PIECE_TYPES.KING;

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
                        && (tileToMove === initialPosition || pieceOnTile.pieceController.isBlack !== isBlackTurn))) {
                    validMoves.push(tileToMove);
                }
            });
        });

        return validMoves;
    }
}