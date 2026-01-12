import { TileInformation } from "../models";
import { PositionUtils } from ".";
import { isKingInCheck, isMoveLegal } from "./isCheck";

export function isCheckmate(
    piecesPosition: TileInformation[],
    isBlackTurn: boolean
): boolean {
    // First, verify the king is actually in check
    if (!isKingInCheck(piecesPosition, isBlackTurn)) {
        return false;
    }

    // Get all pieces of the player who is in check
    const playerPieces = piecesPosition.filter(
        (piece) => piece.pieceController.isBlack === isBlackTurn
    );

    // Check if ANY piece has ANY legal move that escapes check
    for (const piece of playerPieces) {
        const piecePosition = PositionUtils.splitString(piece.position);
        const candidateMoves = piece.pieceController.getValidMoves(
            piecePosition,
            piecesPosition,
            isBlackTurn
        );

        // Check if any of the candidate moves are legal (don't leave king in check)
        for (const move of candidateMoves) {
            if (
                isMoveLegal(piecesPosition, piece.position, move, isBlackTurn)
            ) {
                return false; // Found a legal move, not checkmate
            }
        }
    }

    return true; // No legal moves available, it's checkmate
}
