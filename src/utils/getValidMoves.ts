
import { ARRAY_OF_TILES } from '../constants';
import { TileInformation } from '../models';
import { PositionUtils } from '.';
import { PieceController } from '../models/pieceController';

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    if (selectedPieceTile != null) {
        const selectedPiecePosition = PositionUtils.splitString(selectedPieceTile?.position);
        const movingPiece: PieceController = selectedPieceTile.pieceController;
        return movingPiece.getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn) ?? ARRAY_OF_TILES;
    } else {
        return piecesPosition.filter(tile => tile.pieceController.isBlack === isBlackTurn).map(tile => tile.position);
    }
}