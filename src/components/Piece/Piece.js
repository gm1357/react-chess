function Piece(props) {
    return (
        <span dangerouslySetInnerHTML={{__html: `${props.pieceName}`}}></span>
    );
}

export default Piece;