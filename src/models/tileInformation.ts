import { PIECE_TYPES } from '../constants';

export interface TileInformation {
    position: string,
    piece?: JSX.Element,
    pieceType?: PIECE_TYPES,
    isBlack: boolean,
    selected: boolean
}