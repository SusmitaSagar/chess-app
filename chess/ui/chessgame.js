import React from 'react'
import Game from '../model/chess'

class ChessGame extends React.Component{
    state = {
        gameState: new Game(this.props,isWhite),
        whiteKingInCheck : false,
        blackKingInCheck: false
    }
    render() {
        return (
            /**
             * <div> backgroung= chessboardpng
             *    <stage>
             *       <layer > there are primary thigs with which user intrect
             * 
             * <div>
             */
        )
    }

    movePiece(selectedId, finalPosition){
        /**use athaogoreus theo to calculate a distance betn final position  of chessman and each square
         * assign the closesst square
         * 
        */

    }


}

export default ChessGame