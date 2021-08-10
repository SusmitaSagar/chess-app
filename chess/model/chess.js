class Game {
    constructor(thisPlayerIsPlayingAsWhite) {
        this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite //bolleans tor f
        this.chessBoard = this.makeStartingBoard()
    }

    makeStartingBoard(){
        //make board asccesable for current player
        if( this.thisPlayerIsPlayingAsWhite ){
            // make oriented for white
        }
        else{
            // make oriented for black
        }
    }

    movePiece(pieceId, to) { //pieceid is string and to is x, y coordinate

    }
}