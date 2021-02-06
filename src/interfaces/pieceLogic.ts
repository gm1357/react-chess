import { TileInformation, TilePosition } from "../models";
export interface PieceLogic {
    getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ): string[];
}