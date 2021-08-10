class ChessPiece {
    constructor(name, id, isAttacked, color){
        this.name = name //string name
        this.color = color //string,white or black chessman\
        this.id = id //string
        this.isAttacked = isAttacked //bollean expression
    }
    setSquare() {
        //will assign the piece in specific square
        //this.square = square

    }

    getSquare() {
        //get the cureent square
        //undefined if piece or chessman is killed

    }
}