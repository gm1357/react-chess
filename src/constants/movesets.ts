import { getPawnMoveset } from '../components/Pawn/moveset';
import { getRookValidMoves } from '../components/Rook/moveset';
import { PIECE_TYPES } from './';

export const MOVESETS = {
    [PIECE_TYPES.PAWN]: getPawnMoveset,
    [PIECE_TYPES.ROOK]: getRookValidMoves,
    [PIECE_TYPES.KNIGHT]: getPawnMoveset,
    [PIECE_TYPES.BISHOP]: getPawnMoveset,
    [PIECE_TYPES.QUEEN]: getPawnMoveset,
    [PIECE_TYPES.KING]: getPawnMoveset,
};