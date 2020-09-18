import React from 'react';
import './Keypad.css'

const buttons = (props)=>{

    const name = props.name;
    const assignedClasses = ['button-light'];
    const condition = (name === '(' || name === ')' || name === 'CE' || name === 'C' || name === '/' || name === '*' || name === '*' || name === '+' || name === '-');
    
    if(condition){
        assignedClasses.push('button-shade')
    }
    if(name === '='){
        assignedClasses.push('button-result');
    }

    return(
        <div className = "button">
            <button name={name} className ={assignedClasses.join(' ')} onClick = {props.click}>{name}</button>
        </div>
        
    )
}

export default buttons;