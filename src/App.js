import React,{Component} from 'react';
import ButtonKeys from './Keypad/Keypad';
import Result from './Result/Result';
import History from './History/History';
import { create, all } from 'mathjs'
import './App.css';


const config = { }
const math = create(all, config)

class App extends Component {

  state={
    values:[],
    recent:[],
    logs:[],
    reset:false
  }

  capturePressedKey = (event)=>{
    const key = event.target.name;
    
    if(key === '='){
      this.calculate();
    }
    else if(key === 'C'){
      this.reset();
    }
    else if(key === 'CE'){
      this.backspace();
    }
    else{
      const newArr = [...this.state.values]
      if(this.state.reset === true){
        if(key !== '/' && key !== '*' && key !== '+' && key !== '-'){
          newArr.length = 0
        }
        this.setState({reset:false})
      }
      newArr.push(key)
      this.setState({values: newArr})
    }
  }

  calculate = () =>{
    const calculation = [...this.state.values]
    const recentArr = [...this.state.recent]
    const logsArr = [...this.state.logs]
    logsArr.push(calculation)
    recentArr.push(calculation)
    const newCalc = math.evaluate(calculation.toString().replace(/\,/g,""));
    this.setState({
      values: [newCalc],
      reset:true,
      recent: recentArr,
      logs:logsArr
    })
  }

  reset = () =>{
    this.setState({
      values: [],
      recent: []
    })
  }

  backspace = ()=>{
    const newValue = [...this.state.values]
    newValue.pop()
    this.setState({
      values: newValue,
      recent:[]
    })
  }


  render(){
    let buttons = null;
    const keys = ['(',')','CE','C',7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+'];

    buttons = (
      <div>
        {keys.map((keys,index)=>{
          return <ButtonKeys 
          name = {keys}
          key = {index}
          click = {(e) => this.capturePressedKey(e)}
          />
        })}
      </div>
    )

    return (
      <div className="App">
        <h3>Calculator</h3>
        <div className = "calc-body">
        <Result value = {this.state.values} recent = {this.state.recent[this.state.recent.length-1]} />
        {buttons}
        <History value = {this.state.logs}/>
        </div>
      </div>
    );
  }
  
}

export default App;
