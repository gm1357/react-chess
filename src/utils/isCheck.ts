import { PositionUtils } from ".";
import { PIECE_TYPES } from "../constants";
import { TileInformation } from "../models";

export function isCheck(
    piecesPosition: TileInformation[],
    isBlackTurn: boolean,
    lastPieceMovedPosition: string
) {
    const kingPosition = piecesPosition.find(
        (piece) =>
            piece.pieceController.isBlack === isBlackTurn &&
            piece.pieceController.pieceType === PIECE_TYPES.KING
    )?.position;
    const pieceController = piecesPosition.find(
        (piece) =>
            piece.pieceController.isBlack !== isBlackTurn &&
            piece.position === lastPieceMovedPosition
    )?.pieceController;

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

export function isKingInCheck(
    piecesPosition: TileInformation[],
    isBlackKing: boolean
): boolean {
    const kingPosition = piecesPosition.find(
        (piece) =>
            piece.pieceController.isBlack === isBlackKing &&
            piece.pieceController.pieceType === PIECE_TYPES.KING
    )?.position;

    if (!kingPosition) {
        return false;
    }

    const opponentPieces = piecesPosition.filter(
        (piece) => piece.pieceController.isBlack !== isBlackKing
    );

    return opponentPieces.some((piece) => {
        const moves = piece.pieceController.getValidMoves(
            PositionUtils.splitString(piece.position),
            piecesPosition,
            !isBlackKing
        );
        return moves.includes(kingPosition);
    });
}

export function isMoveLegal(
    piecesPosition: TileInformation[],
    fromPos: string,
    toPos: string,
    isBlack: boolean
): boolean {
    const movingPiece = piecesPosition.find((p) => p.position === fromPos);
    if (!movingPiece) {
        return false;
    }

    const parsedPos = PositionUtils.splitString(toPos);

    if (
        parsedPos.file < 0 ||
        parsedPos.file > 7 ||
        parsedPos.rank < 0 ||
        parsedPos.rank > 7
    ) {
        return false;
    }

    // Simulate the move by creating a new board state
    const simulatedPosition = piecesPosition
        .filter((p) => p.position !== fromPos && p.position !== toPos)
        .map((p) => ({ ...p }));

    simulatedPosition.push({
        position: toPos,
        piece: movingPiece.piece,
        pieceController: movingPiece.pieceController,
    });

    // Check if our own king is in check after the move
    return !isKingInCheck(simulatedPosition, isBlack);
}
