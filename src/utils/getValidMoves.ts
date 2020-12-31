import Pawn from "../components/Pawn";
import { ARRAY_OF_TILES } from "../constants";
import { TileInformation, TilePosition } from "../models";
import { PositionUtils } from ".";

export function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    const pieceType = selectedPieceTile?.piece?.type;
    const selectedPiecePosition = PositionUtils.splitString(selectedPieceTile?.position);
    const isBlack = selectedPieceTile?.isBlack;

    if (pieceType) {
        switch (pieceType) {
            case Pawn:
                return getPawnValidMoves(selectedPiecePosition, isBlack, piecesPosition, isBlackTurn);
            default:
                return ARRAY_OF_TILES;
        };
    } else {
        return piecesPosition.filter(tile => tile.isBlack === isBlackTurn).map(tile => tile.position);
    }
}

function getPawnValidMoves(selectedPiecePosition: TilePosition, isBlack: boolean | undefined, piecesPosition: TileInformation[], isBlackTurn: boolean) {
    const validMoves = [];
    validMoves.push(PositionUtils.getString(selectedPiecePosition));
    const firstMove = isBlack ? selectedPiecePosition.rank === 6 : selectedPiecePosition.rank === 1;
    const operator = (isBlack ? -1 : +1);

    let tile = {
        file: selectedPiecePosition.file,
        rank: selectedPiecePosition.rank + operator
    };
    let tileString = PositionUtils.getString(tile);
    if (!piecesPosition.some(piece => piece.position === tileString)) {
        validMoves.push(tileString);
    }

    if (firstMove && validMoves.length) {
        tile = { file: tile.file, rank: tile.rank + operator };
        tileString = PositionUtils.getString(tile);
        if (!piecesPosition.some(piece => piece.position === tileString)) {
            validMoves.push(tileString);
        }
    }

    tile = {
        file: selectedPiecePosition.file - 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = PositionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
        validMoves.push(tileString);
    }
    tile = {
        file: selectedPiecePosition.file + 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = PositionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
        validMoves.push(tileString);
    }

    return validMoves;
}