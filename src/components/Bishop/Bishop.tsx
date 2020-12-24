import Piece from "../Piece/Piece";
import * as pieces from '../../constants/pieces'

function Bishop(props: any) {
    return <Piece pieceName={props.isBlack ? pieces.BLACK_BISHOP : pieces.WHITE_BISHOP}></Piece>
}

export default Bishop;