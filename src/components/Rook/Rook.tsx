import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function Rook(props: any) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_ROOK : pieces.WHITE_ROOK}></Piece>
}

export default Rook;