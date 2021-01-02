import { TileInformation, TilePosition } from "../../models";
import { getBishopValidMoves } from "../Bishop";
import { getRookValidMoves } from "../Rook";

export function getQueenMoveset(
    selectedPiecePosition: TilePosition,
    piecesPosition: TileInformation[],
    isBlackTurn: boolean
) {
    const validMoves = [];
    
    validMoves.push(...getRookValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));
    validMoves.push(...getBishopValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));

    return validMoves;
}