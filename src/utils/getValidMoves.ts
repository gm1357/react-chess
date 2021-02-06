
import { ARRAY_OF_TILES } from '../constants';
import { TileInformation } from '../models';
import { PositionUtils } from '.';
import { MOVESETS } from '../constants';
import { PieceLogic } from '../interfaces/pieceLogic';

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    const pieceType = selectedPieceTile?.pieceType;
    const selectedPiecePosition = PositionUtils.splitString(selectedPieceTile?.position);

    if (pieceType != null) {
        const movingPiece: PieceLogic = new MOVESETS[pieceType]();
        return movingPiece.getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn) ?? ARRAY_OF_TILES;
    } else {
        return piecesPosition.filter(tile => tile.isBlack === isBlackTurn).map(tile => tile.position);
    }
}