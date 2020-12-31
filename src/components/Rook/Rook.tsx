import Piece from '../Piece';
import { Pieces } from '../../constants'

function Rook(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_ROOK : Pieces.WHITE_ROOK}></Piece>
}

export default Rook;