import { getKnightValidMoves } from '../components/Knight';
import { getPawnMoveset } from '../components/Pawn';
import { getRookValidMoves } from '../components/Rook';
import { PIECE_TYPES } from './';

export const MOVESETS = {
    [PIECE_TYPES.PAWN]: getPawnMoveset,
    [PIECE_TYPES.ROOK]: getRookValidMoves,
    [PIECE_TYPES.KNIGHT]: getKnightValidMoves,
    [PIECE_TYPES.BISHOP]: getPawnMoveset,
    [PIECE_TYPES.QUEEN]: getPawnMoveset,
    [PIECE_TYPES.KING]: getPawnMoveset,
};