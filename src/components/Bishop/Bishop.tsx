import Piece from '../Piece';
import { Pieces } from '../../constants'

function Bishop(props: any) {
    return <Piece pieceName={props.isBlack ? Pieces.BLACK_BISHOP : Pieces.WHITE_BISHOP}></Piece>
}

export default Bishop;