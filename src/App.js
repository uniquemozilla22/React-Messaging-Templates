import React, {Component} from 'react';
import './App.css';
import HeadSection from './head/head'
import Body from './body/body'

class App extends Component {
  state={
    darktoggle:false
  }

  darkModeHandler=()=>
{
  let darkMode= this.state.darktoggle
  this.setState({
    darktoggle:!darkMode
  })

}



  render() {
    let clas=["main-section"]

    if(this.state.darktoggle)
    {
      clas.push("dark") 
    }
    
    return (
      <div className={clas.join(" ")}>
        <button onClick={this.darkModeHandler}>Dark</button>
        <HeadSection  name="Yogesh Bhattarai" status="online" darktoggle={this.state.darktoggle}/>
        <Body darktoggle={this.state.darktoggle}/>
      </div>
    );
  }
}

export default App;
