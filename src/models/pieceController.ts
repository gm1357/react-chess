import { TileInformation, TilePosition } from ".";
import { PIECE_TYPES } from "../constants";

export interface PieceController {
    pieceType: PIECE_TYPES;

    getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ): string[];
}