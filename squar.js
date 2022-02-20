class Squar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className='square'>
                <button className='square' onClick={this.props.onClick}>
                    {this.props.value}
                </button>
            </div>

        )
    }
}