import React from 'react';
import '../styles/App.css'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      time:new Date(),
    }
  }

componentDidMount(){
  this.updateTIme = setInterval(()=>{
    this.setState({time:new Date()})
  },1*1000)
}
componentWillUnmount(){
  clearInterval(this.updateTIme)
}
 render(){

  return (
    <div id="main">
      <div className="date-time">
        {this.state.time.toLocaleString()}
      </div>
    </div>
  )
}
}


export default App;
