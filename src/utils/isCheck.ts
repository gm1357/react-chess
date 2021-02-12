import { PositionUtils } from ".";
import { PIECE_TYPES } from "../constants";
import { TileInformation } from "../models";

export function isCheck(
    piecesPosition: TileInformation[],
    isBlackTurn: boolean,
    lastPieceMovedPosition: string
) {
    const kingPosition = piecesPosition
        .find(piece => piece.pieceController.isBlack === isBlackTurn && piece.pieceController.pieceType === PIECE_TYPES.KING)
        ?.position;
    const pieceController = piecesPosition
        .find(piece => piece.pieceController.isBlack !== isBlackTurn && piece.position === lastPieceMovedPosition)
        ?.pieceController;

    if (pieceController !== undefined && kingPosition !== undefined) {
        const lastPieceNextPossibleMoves = pieceController.getValidMoves(
            PositionUtils.splitString(lastPieceMovedPosition),
            piecesPosition,
            !isBlackTurn
        );
        return lastPieceNextPossibleMoves.includes(kingPosition);
    } else {
        return false;
    }
}