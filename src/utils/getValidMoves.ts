
import { ARRAY_OF_TILES } from '../constants';
import { TileInformation } from '../models';
import { PositionUtils } from '.';
import { MOVESETS } from '../constants/movesets';

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    const pieceType = selectedPieceTile?.pieceType;
    const selectedPiecePosition = PositionUtils.splitString(selectedPieceTile?.position);
    const isBlack = selectedPieceTile?.isBlack;

    if (pieceType != null) {
        const validMovesFn = MOVESETS[pieceType];
        return validMovesFn(selectedPiecePosition, isBlack, piecesPosition, isBlackTurn) ?? ARRAY_OF_TILES;
    } else {
        return piecesPosition.filter(tile => tile.isBlack === isBlackTurn).map(tile => tile.position);
    }
}