
import { ARRAY_OF_TILES } from '../constants';
import { TileInformation } from '../models';
import { PositionUtils } from '.';
import { MOVESETS } from '../constants';

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    const pieceType = selectedPieceTile?.pieceType;
    const selectedPiecePosition = PositionUtils.splitString(selectedPieceTile?.position);

    if (pieceType != null) {
        const validMovesFn = MOVESETS[pieceType];
        return validMovesFn(selectedPiecePosition, piecesPosition, isBlackTurn) ?? ARRAY_OF_TILES;
    } else {
        return piecesPosition.filter(tile => tile.isBlack === isBlackTurn).map(tile => tile.position);
    }
}