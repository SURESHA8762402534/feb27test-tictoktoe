class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            xIsNext: true,
            stepNumber:0,
            history:[
                {squares: Array(9).fill(null)}
            ],
          };
    }

    jumpTo = (step)=> {
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0
        })

    }

    handleClick=(i)=> {
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const Current = history[history.length-1];
        const squares = Current.squares.slice();
        const winner = calculatewinner(squares);
         if(winner || squares[i]){
             return alert("Game over click on start game start again");
         }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history : history.concat({
                squares:squares
            }),
          
          xIsNext: !this.state.xIsNext,
          stepNumber:history.length
        });
      }

    render(){
        const history = this.state.history;
        const Current = history[this.state.stepNumber];
        const winner = calculatewinner(Current.squares);
        const moves = history.map((stop,move)=>{
            const desc = move? "Go to #" + move:'Start the game';
            return(
            
                <li key={move}>

                <button className="ul" onClick={()=>{this.jumpTo(move)}}>{desc}</button> 
                
                </li>
                

            )
        });

        let status;
        if(winner){
            status ='winner is ' + winner;
        }else{
            status= 'next player is' + (this.state.xIsNext?'X':'O');
        }

        return(
        
            
        <div className='game'>
             <div className='game-board'>
                    <Board onClick={(i)=>this.handleClick(i)}
                    squares={Current.squares}/>
                    
    
            </div>

            <div className="game-info">
                <ul id="win">{status}</ul>
                <ul>{moves}</ul>
            </div>
      </div>
       )
    }
}

function calculatewinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i=0;i<lines.length;i++){
        const [a,b,c]= lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[b] === squares[c] ){
            return squares[a];
        }
    }
    return null;
}
