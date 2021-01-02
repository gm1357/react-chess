import { getBishopValidMoves } from '../components/Bishop';
import { getKnightValidMoves } from '../components/Knight';
import { getPawnMoveset } from '../components/Pawn';
import { getQueenMoveset } from '../components/Queen';
import { getRookValidMoves } from '../components/Rook';
import { PIECE_TYPES } from './';

export const MOVESETS = {
    [PIECE_TYPES.PAWN]: getPawnMoveset,
    [PIECE_TYPES.ROOK]: getRookValidMoves,
    [PIECE_TYPES.KNIGHT]: getKnightValidMoves,
    [PIECE_TYPES.BISHOP]: getBishopValidMoves,
    [PIECE_TYPES.QUEEN]: getQueenMoveset,
    [PIECE_TYPES.KING]: getPawnMoveset,
};