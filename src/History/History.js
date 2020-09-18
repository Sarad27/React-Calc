import React from 'react';
import './History.css';

const history = (props)=>{

    const values = [...props.value]
    let history = null


    history = (
        <div >
            {values.map((values) =>{
                return (      
                <p key={values.toString()}>{values}</p>
                )
            })}
        </div>
    )
    
    return(
        <div className="history">
            <p >Logs</p>
            {history}
        </div>
       
    )
}

export default history;
