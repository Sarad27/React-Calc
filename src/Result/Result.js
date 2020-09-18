import React from 'react';
import './Result.css';

const result = (props)=>{
    return(
        <div className = "result">
            <p className ="historyMuted">{props.recent}</p>
            <p className="answer">{props.value}</p>
        </div>
    )
}

export default result;