import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function Pawn(props) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_PAWN : pieces.WHITE_PAWN}></Piece>
}

export default Pawn;