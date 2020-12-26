import { ARRAY_OF_TILES } from "../constants/arrayOfTiles";
import { TileInformation } from "../models/tileInformation";
import { TilePosition } from "../models/tilePosition";
import positionUtils from "./positionUtils";

function getValidMoves(
    piecesPosition: TileInformation[],
    selectedPieceTile: TileInformation | undefined,
    isBlackTurn: boolean
) {
    const pieceType = selectedPieceTile?.piece?.type.name;
    const selectedPiecePosition = positionUtils.splitString(selectedPieceTile?.position);
    const isBlack = selectedPieceTile?.isBlack;

    if (pieceType) {
        switch (pieceType) {
            case 'Pawn':
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
    validMoves.push(positionUtils.getString(selectedPiecePosition));
    const firstMove = isBlack ? selectedPiecePosition.rank === 6 : selectedPiecePosition.rank === 1;
    const operator = (isBlack ? -1 : +1);

    let tile = {
        file: selectedPiecePosition.file,
        rank: selectedPiecePosition.rank + operator
    };
    let tileString = positionUtils.getString(tile);
    if (!piecesPosition.some(piece => piece.position === tileString)) {
        validMoves.push(tileString);
    }

    if (firstMove && validMoves.length) {
        tile = { file: tile.file, rank: tile.rank + operator };
        tileString = positionUtils.getString(tile);
        if (!piecesPosition.some(piece => piece.position === tileString)) {
            validMoves.push(tileString);
        }
    }

    tile = {
        file: selectedPiecePosition.file - 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = positionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString)) {
        validMoves.push(tileString);
    }
    tile = {
        file: selectedPiecePosition.file + 1,
        rank: selectedPiecePosition.rank + operator
    };
    tileString = positionUtils.getString(tile);
    if (piecesPosition.some(piece => piece.position === tileString && piece.isBlack !== isBlackTurn)) {
        validMoves.push(tileString);
    }

    return validMoves;
}

export default getValidMoves;