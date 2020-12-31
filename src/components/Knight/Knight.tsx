import Piece from '../Piece';
import { Pieces } from '../../constants'

function Knight(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_KNIGHT : Pieces.WHITE_KNIGHT}></Piece>
}

export default Knight;