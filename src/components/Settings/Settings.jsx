import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import s from "./Settings.module.css"
import { green, red } from '@material-ui/core/colors';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';

class Settings extends React.Component {
  /* constructor(props){
    super(props);
    this.state={color:"red"}
  } */


  state = {
    color: undefined,
    x: "green",
    y: "black",
    z: "red",
  }

changeColor = () => {
if(this.x == "green") {
  this.setState({color: "yellow"})
} else {
  this.setState({color: "red"})
 }
}

/* changeColor2 = () => {
  this.setState({color: "blue"})
} */


  render() {

  return (
  <div>

    <div className = {s.settings} style ={{color: this.state.color}} >
      <button style ={{color: this.state.color}} onClick={this.changeColor} onDoubleClick={this.changeColor2}>Change Color</button>
    </div>
  </div>
  );
 }
}
export default Settings;

