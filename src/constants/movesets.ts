import { BishopLogic } from '../components/Bishop';
import { KingLogic } from '../components/King';
import { KinghtLogic } from '../components/Knight';
import { PawnLogic } from '../components/Pawn';
import { QueenLogic } from '../components/Queen';
import { RookLogic } from '../components/Rook';
import { PIECE_TYPES } from './';

export const MOVESETS = {
    [PIECE_TYPES.PAWN]: PawnLogic,
    [PIECE_TYPES.ROOK]: RookLogic,
    [PIECE_TYPES.KNIGHT]: KinghtLogic,
    [PIECE_TYPES.BISHOP]: BishopLogic,
    [PIECE_TYPES.QUEEN]: QueenLogic,
    [PIECE_TYPES.KING]: KingLogic,
};