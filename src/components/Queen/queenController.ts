import { PieceController } from "../../models/pieceController";
import { TileInformation, TilePosition } from "../../models";
import { BishopController } from "../Bishop";
import { RookController } from "../Rook";
import { PIECE_TYPES } from "../../constants";

export class QueenController implements PieceController {

    public pieceType = PIECE_TYPES.QUEEN;

    constructor(
        public isBlack: boolean,
        public selected: boolean
    ) {}

    public getValidMoves(
        selectedPiecePosition: TilePosition,
        piecesPosition: TileInformation[],
        isBlackTurn: boolean
    ) {
        const validMoves = [];

        validMoves.push(...new RookController(false, false).getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));
        validMoves.push(...new BishopController(false, false).getValidMoves(selectedPiecePosition, piecesPosition, isBlackTurn));

        return validMoves;
    }
}