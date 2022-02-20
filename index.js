class App extends React.Component{
  
    render(){
        return(
            <>

            <h1>Tic-Tok-Toi Game using React Class Component</h1>
            <Game/>
            
            </>
           
               
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)