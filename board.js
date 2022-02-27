class Board extends React.Component {
    constructor(props) {
      super(props);
    }
  renderSquare(i) {
      return (
        <Squar
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }


render() {

    return (
      <div>
       
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
         
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
      </div>
    );
  }
}