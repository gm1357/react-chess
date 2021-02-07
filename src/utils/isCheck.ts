import { PositionUtils } from ".";
import { MOVESETS, PIECE_TYPES } from "../constants";
import { TileInformation } from "../models";

export function isCheck(
    piecesPosition: TileInformation[],
    isBlackTurn: boolean,
    lastPieceMovedPosition: string
) {
    const kingPosition = piecesPosition
        .find(piece => piece.isBlack === isBlackTurn && piece.pieceType === PIECE_TYPES.KING)
        ?.position;
    const lastPieceMoved = piecesPosition
        .find(piece => piece.isBlack !== isBlackTurn && piece.position === lastPieceMovedPosition)
        ?.pieceType;

    if (lastPieceMoved !== undefined && kingPosition) {
        const lastPieceNextPossibleMoves = new MOVESETS[lastPieceMoved]().getValidMoves(
            PositionUtils.splitString(lastPieceMovedPosition),
            piecesPosition,
            !isBlackTurn
        );
        return lastPieceNextPossibleMoves.includes(kingPosition);
    } else {
        return false;
    }
}