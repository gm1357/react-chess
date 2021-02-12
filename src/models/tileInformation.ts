import { PieceController } from './pieceController';

export interface TileInformation {
    position: string,
    piece: JSX.Element,
    pieceController: PieceController
}