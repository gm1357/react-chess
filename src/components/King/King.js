import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function King(props) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_KING : pieces.WHITE_KING}></Piece>
}

export default King;