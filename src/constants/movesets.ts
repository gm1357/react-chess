import { getPawnMoveset } from '../components/Pawn/moveset';
import { PIECE_TYPES } from './';

export const MOVESETS = {
    [PIECE_TYPES.PAWN]: getPawnMoveset,
    [PIECE_TYPES.ROOK]: getPawnMoveset,
    [PIECE_TYPES.KNIGHT]: getPawnMoveset,
    [PIECE_TYPES.BISHOP]: getPawnMoveset,
    [PIECE_TYPES.QUEEN]: getPawnMoveset,
    [PIECE_TYPES.KING]: getPawnMoveset,
};