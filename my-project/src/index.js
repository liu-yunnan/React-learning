import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

 //class Square extends React.Component {
  /*该组件不需要再保存游戏的state了
  constructor(props){
    // 每次定义子类构造函数，都需要调用super方法
    super(props);
    // 初始化state
    this.state = {
      value : null
    }
  } 
  */
 /*
  render() {
    return (
      <button 
       className="square" 
       onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
*/

// 函数组件：组件只包含一个 render 方法，并且不包含 state
function Square(props){
  return(
    <button className='square'
    onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // constructor(props){
  //   super(props);
  //   // board初始状态为长度为9的空值数组
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }
  renderSquare(i) {
    return (
    <Square 
      value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
    />
    );
  }

  render() {
    // const status = 'Next player:'+(this.state.xIsNext?'X':'O');
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if(winner){
    //   status = 'Winner：'+ winner;
    // }else{
    //   status = 'Next player:'+(this.state.xIsNext?'X':'O');
    // }
    return (
      <div>
        <div className="status"></div>
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
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      history:[
        {squares: Array(9).fill(null)}
      ],
      stepNumber: 0,
      xIsNext:true,
    };
  }
  handleClick(i){
    /*创建副本----不可变性
     修改数据方式：
     1.直接修改数据
     2.新数据替代旧数据
       优点：
       简化复杂的功能（不直接修改可以让我们追溯并复用游戏的历史记录）
       跟踪数据变化（版本比较）
       确定React中何时重新渲染
       （不可变性--pure components，
       轻松确定不可变数据是否发生了变化，
       从而确定何时对组件重新渲染）
    */
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    //有玩家胜出，或者某个square已经被填充，直接返回
    if(calculateWinner(squares)||squares[i]){
      return;
    }
    squares[i]=this.state.xIsNext? 'X':'O';
    this.setState({
      history:history.concat([{
        squares:squares,
      }]),
      stepNumber: history.length,
      xIsNext:!this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({      
      stepNumber: step,      
      xIsNext: (step % 2) === 0,    
    });  
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    // step 变量指向的是当前 history 元素的值
    // move 则指向的是 history 元素的索引
    const moves = history.map((step,move)=>{
      const desc = move?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if(winner){
      status = 'Winner: '+winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares = {current.squares}
          onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

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
