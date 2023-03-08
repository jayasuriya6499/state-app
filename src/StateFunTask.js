import React, { useState } from 'react';

const StateFunTask = () => {
    
    const [arr, setarr]= useState([1,2,3]);

   var EventUpdate = (index) => {
       console.log(index);

      const result= arr.map((value,i) => index == i ? value*2 : value);
      setarr(result);
      console.log("result", result);
   }

  return (
    <div>
        {arr.map((value,index) => (
             <div key={index}>
                <h1>{value}</h1>
                <button onClick={() => EventUpdate(index)}> Click </button>
             </div>
        ))}
    </div>
  );
}

export default StateFunTask;