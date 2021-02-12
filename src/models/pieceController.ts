import { TileInformation, TilePosition } from ".";
import { PIECE_TYPES } from "../constants";

export interface PieceController {
    pieceType: PIECE_TYPES;
    isBlack: boolean;
    selected: boolean;

    getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ): string[];
}