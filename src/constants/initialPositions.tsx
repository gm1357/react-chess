import Pawn, { PawnController } from '../components/Pawn';
import Rook, { RookController } from '../components/Rook';
import Knight, { KnightController } from '../components/Knight';
import Bishop, { BishopController } from '../components/Bishop';
import Queen, { QueenController } from '../components/Queen';
import King, { KingController } from '../components/King';
import { TileInformation } from '../models';

export const INITIAL_POSITIONS: TileInformation[] = [
    { position: 'a8', piece: <Rook isBlack={true}></Rook>, pieceController: new RookController(true, false) },
    { position: 'b8', piece: <Knight isBlack={true}></Knight>, pieceController: new KnightController(true, false) },
    { position: 'c8', piece: <Bishop isBlack={true}></Bishop>, pieceController: new BishopController(true, false) },
    { position: 'd8', piece: <Queen isBlack={true}></Queen>, pieceController: new QueenController(true, false) },
    { position: 'e8', piece: <King isBlack={true}></King>, pieceController: new KingController(true, false) },
    { position: 'f8', piece: <Bishop isBlack={true}></Bishop>, pieceController: new BishopController(true, false) },
    { position: 'g8', piece: <Knight isBlack={true}></Knight>, pieceController: new KnightController(true, false) },
    { position: 'h8', piece: <Rook isBlack={true}></Rook>, pieceController: new RookController(true, false) },
    { position: 'a7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'b7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'c7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'd7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'e7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'f7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'g7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'h7', piece: <Pawn isBlack={true}></Pawn>, pieceController: new PawnController(true, false) },
    { position: 'a2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'b2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'c2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'd2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'e2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'f2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'g2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'h2', piece: <Pawn isBlack={false}></Pawn>, pieceController: new PawnController(false, false)  },
    { position: 'a1', piece: <Rook isBlack={false}></Rook>, pieceController: new RookController(false, false)  },
    { position: 'b1', piece: <Knight isBlack={false}></Knight>, pieceController: new KnightController(false, false)  },
    { position: 'c1', piece: <Bishop isBlack={false}></Bishop>, pieceController: new BishopController(false, false)  },
    { position: 'd1', piece: <Queen isBlack={false}></Queen>, pieceController: new QueenController(false, false)  },
    { position: 'e1', piece: <King isBlack={false}></King>, pieceController: new KingController(false, false)  },
    { position: 'f1', piece: <Bishop isBlack={false}></Bishop>, pieceController: new BishopController(false, false)  },
    { position: 'g1', piece: <Knight isBlack={false}></Knight>, pieceController: new KnightController(false, false)  },
    { position: 'h1', piece: <Rook isBlack={false}></Rook>, pieceController: new RookController(false, false)  },
];