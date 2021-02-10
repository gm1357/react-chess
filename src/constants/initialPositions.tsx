import Pawn, { PawnController } from '../components/Pawn';
import Rook, { RookController } from '../components/Rook';
import Knight, { KnightController } from '../components/Knight';
import Bishop, { BishopController } from '../components/Bishop';
import Queen, { QueenController } from '../components/Queen';
import King, { KingController } from '../components/King';

export const INITIAL_POSITIONS = [
    { position: 'a8', piece: <Rook isBlack={true}></Rook>, pieceController: new RookController(), selected: false, isBlack: true },
    { position: 'b8', piece: <Knight isBlack={true}></Knight>, pieceController: new KnightController(), selected: false, isBlack: true },
    { position: 'c8', piece: <Bishop isBlack={true}></Bishop>, pieceController: new BishopController(), selected: false, isBlack: true },
    { position: 'd8', piece: <Queen isBlack={true}></Queen>, pieceController: new QueenController(), selected: false, isBlack: true },
    { position: 'e8', piece: <King isBlack={true}></King>, pieceController: new KingController(), selected: false, isBlack: true },
    { position: 'f8', piece: <Bishop isBlack={true}></Bishop>, pieceController: new BishopController(), selected: false, isBlack: true },
    { position: 'g8', piece: <Knight isBlack={true}></Knight>, pieceController: new KnightController(), selected: false, isBlack: true },
    { position: 'h8', piece: <Rook isBlack={true}></Rook>, pieceController: new RookController(), selected: false, isBlack: true },
    { position: 'a7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'b7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'c7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'd7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'e7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'f7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'g7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'h7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: true },
    { position: 'a2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'b2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'c2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'd2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'e2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'f2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'g2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'h2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(), selected: false, isBlack: false },
    { position: 'a1', piece: <Rook isBlack={false}></Rook>, pieceController: new RookController(), selected: false, isBlack: false },
    { position: 'b1', piece: <Knight isBlack={false}></Knight>, pieceController: new KnightController(), selected: false, isBlack: false },
    { position: 'c1', piece: <Bishop isBlack={false}></Bishop>, pieceController: new BishopController(), selected: false, isBlack: false },
    { position: 'd1', piece: <Queen isBlack={false}></Queen>, pieceController: new QueenController(), selected: false, isBlack: false },
    { position: 'e1', piece: <King isBlack={false}></King>, pieceController: new KingController(), selected: false, isBlack: false },
    { position: 'f1', piece: <Bishop isBlack={false}></Bishop>, pieceController: new BishopController(), selected: false, isBlack: false },
    { position: 'g1', piece: <Knight isBlack={false}></Knight>, pieceController: new KnightController(), selected: false, isBlack: false },
    { position: 'h1', piece: <Rook isBlack={false}></Rook>, pieceController: new RookController(), selected: false, isBlack: false },
];