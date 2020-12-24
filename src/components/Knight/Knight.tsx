import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function Knight(props: any) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_KNIGHT : pieces.WHITE_KNIGHT}></Piece>
}

export default Knight;