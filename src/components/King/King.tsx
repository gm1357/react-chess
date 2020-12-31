import Piece from '../Piece';
import { Pieces } from '../../constants'

function King(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_KING : Pieces.WHITE_KING}></Piece>
}

export default King;