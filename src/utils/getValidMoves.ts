import { ARRAY_OF_TILES } from "../constants";
import { TileInformation } from "../models";
import { PositionUtils } from ".";
import { PieceController } from "../models/pieceController";
import { isMoveLegal } from "./isCheck";

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    if (selectedPieceTile != null) {
        const selectedPiecePosition = PositionUtils.splitString(
            selectedPieceTile?.position
        );
        const movingPiece: PieceController = selectedPieceTile.pieceController;
        const candidateMoves =
            movingPiece.getValidMoves(
                selectedPiecePosition,
                piecesPosition,
                isBlackTurn
            ) ?? ARRAY_OF_TILES;

        // Filter out moves that would leave the king in check
        return candidateMoves.filter((move) => {
            if (selectedPieceTile.position === move) {
                return true;
            }
            return isMoveLegal(
                piecesPosition,
                selectedPieceTile.position,
                move,
                isBlackTurn
            );
        });
    } else {
        return piecesPosition
            .filter((tile) => tile.pieceController.isBlack === isBlackTurn)
            .map((tile) => tile.position);
    }
}
