import Piece from '../Piece';
import { Pieces } from '../../constants'

function Queen(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_QUEEN : Pieces.WHITE_QUEEN}></Piece>
}

export default Queen;