
import './App.css';
import React from 'react';


class App extends React.Component{
  state={
    Person :{
      fullName:"Barehmi Salem",
    bio:"I love Footble",
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlP21fNZTSM9qCquJTq4Kc8epa0ctraJPZQ&usqp=CAU", 
     profession:"FOOTBOOLER"},
     show:false,
     time:0
  };
  handlshowPerson=()=>{
    this.setState((prevstate) => ({
      show:prevstate.show}));
    
    }
    componentDidMount(){
      this.timerId=setInterval(() => {
        this.setState((prevState) => ({time:prevState.time+1}));
        
      }, 100);
    }
 
  render(){
    return(
      <div >
        {this.state.Person.show &&(
          <div>
            <p><img suc={this.state.Person.img} alt={this.state.Person.fullName} width={20}/></p>
            <p>I'm {this.state.Person.profession} </p>
            <p>{this.state.Person.bio} </p>
          </div>
        )}
<button class="btn btn-block btn-primary" onClick={this.handlshowPerson}>click</button>
    <h1>{this.state.time} </h1>
      </div>
    )}}
    
    
export default App;
