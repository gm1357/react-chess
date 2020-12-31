import Piece from '../Piece';
import { Pieces } from '../../constants'

function Pawn(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_PAWN : Pieces.WHITE_PAWN}></Piece>
}

export default Pawn;