import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function Queen(props: any) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_QUEEN : pieces.WHITE_QUEEN}></Piece>
}

export default Queen;