import { PieceLogic } from "../../interfaces/pieceLogic";
import { TileInformation, TilePosition } from "../../models";
import { BishopLogic } from "../Bishop";
import { RookLogic } from "../Rook";

export class QueenLogic implements PieceLogic {

    public getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ) {
        const validMoves = [];

        validMoves.push(...new RookLogic().getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));
        validMoves.push(...new BishopLogic().getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));

        return validMoves;
    }
}