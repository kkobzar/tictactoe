import React from "react";
import Square from "./Square"
import './Board.css'
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xPlayer: true,
        }
    }

    tileChange = i=>{
        const squares = this.state.squares.slice();
        const player = this.state.xPlayer
        squares[i] = this.state.xPlayer?'X':'0';
        this.setState({squares,xPlayer:!player});
    }
    renderSquare(i){
        return <Square
            onClick={() => this.tileChange(i)}
            value={this.state.squares[i]}/>
    }
    render() {
        const winner = calculateWinner(this.state.squares)
        let state;
        if(winner) {
            state = React.createElement('div', {className: 'player-info'},
                React.createElement('h3',null,`Player ${winner} won!`),
                React.createElement('button',{onClick:()=>{
                        this.setState({squares: Array(9).fill(null),
                            xPlayer: true,},)
                    }},'Restart Game')
                )
        }else {
            state = React.createElement('div',{className:'player-info'},`Next turn player: ${this.state.xPlayer ? 'X' : '0'}`)
        }
        return(
            <div className={'board-box'}>
                {state}
                <div className="board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Board

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
