function Piece(props: any) {
    return (
        <span dangerouslySetInnerHTML={{__html: `${props.pieceName}`}}></span>
    );
}

export default Piece;