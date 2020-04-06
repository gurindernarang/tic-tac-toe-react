import React,{Component} from 'react';
import Square from './square';
import calculateWinner from '../helper';
const style = {
    border: '1px solid darkblue',
    height: '300px',
    width: '300px',
    margin: '0 auto',
    display: 'grid',
    borderRadius: '4px',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};
class board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X': '0';
        this.setState({squares:squares});
        this.setState({xIsNext:!this.state.xIsNext});
    }
    renderSquare(i){
        return <Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner)  {
            status = "Winner is: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? 'X' : '0');
        }    
        return (
            <div>
                <div className="board-row" style={style} >
                    {this.state.squares.map((square,index) => (
                        this.renderSquare(index)
                    ))}
                </div>
                <div className="status">{status}</div>
            </div>
        )
    }
}
export default board;