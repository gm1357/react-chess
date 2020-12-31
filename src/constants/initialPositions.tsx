import Pawn from '../components/Pawn';
import Rook from '../components/Rook';
import Knight from '../components/Knight';
import Bishop from '../components/Bishop';
import Queen from '../components/Queen';
import King from '../components/King';
import { PIECE_TYPES } from '.';

export const INITIAL_POSITIONS = [
    { position: 'a8', piece: <Rook isBlack={true}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: true },
    { position: 'b8', piece: <Knight isBlack={true}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: true },
    { position: 'c8', piece: <Bishop isBlack={true}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: true },
    { position: 'd8', piece: <Queen isBlack={true}></Queen>, pieceType: PIECE_TYPES.QUEEN, selected: false, isBlack: true },
    { position: 'e8', piece: <King isBlack={true}></King>, pieceType: PIECE_TYPES.KING, selected: false, isBlack: true },
    { position: 'f8', piece: <Bishop isBlack={true}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: true },
    { position: 'g8', piece: <Knight isBlack={true}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: true },
    { position: 'h8', piece: <Rook isBlack={true}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: true },
    { position: 'a7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'b7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'c7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'd7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'e7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'f7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'g7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'h7', piece: <Pawn isBlack={true}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: true },
    { position: 'a2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'b2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'c2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'd2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'e2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'f2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'g2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'h2', piece: <Pawn isBlack={false}></Pawn>, pieceType: PIECE_TYPES.PAWN, selected: false, isBlack: false },
    { position: 'a1', piece: <Rook isBlack={false}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: false },
    { position: 'b1', piece: <Knight isBlack={false}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: false },
    { position: 'c1', piece: <Bishop isBlack={false}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: false },
    { position: 'd1', piece: <Queen isBlack={false}></Queen>, pieceType: PIECE_TYPES.QUEEN, selected: false, isBlack: false },
    { position: 'e1', piece: <King isBlack={false}></King>, pieceType: PIECE_TYPES.KING, selected: false, isBlack: false },
    { position: 'f1', piece: <Bishop isBlack={false}></Bishop>, pieceType: PIECE_TYPES.BISHOP, selected: false, isBlack: false },
    { position: 'g1', piece: <Knight isBlack={false}></Knight>, pieceType: PIECE_TYPES.KNIGHT, selected: false, isBlack: false },
    { position: 'h1', piece: <Rook isBlack={false}></Rook>, pieceType: PIECE_TYPES.ROOK, selected: false, isBlack: false },
];