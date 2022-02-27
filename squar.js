class Squar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div >
                <button className='square' onClick={this.props.onClick}>
                    {this.props.value}
                </button>
            </div>

        )
    }
}