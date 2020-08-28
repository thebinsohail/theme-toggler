import React, { useState } from 'react';

function Click() {
    
    let [isMorning,setMorning]=useState(false);

    return (
        
    //if false then bg will be night as daylight class has bg=ltgray
      <div className={`box ${isMorning ? 'daylight' :' '} `}>
        
    <h1>It's a {isMorning ? 'Day':'Night'}</h1>
            <button onClick={() =>setMorning(!isMorning)}>
          
            </button>
      </div>
     
    );
}
export default Click