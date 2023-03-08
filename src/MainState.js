import React, { useState } from 'react';



const MainState = () => {
     const[name, setName]= useState("Fabevy");
     const[age, setAge]= useState(30);
     const[object, setObject]= useState({});



  return (
    <div>MainState {name} {age} {object.gender}
    
    <button onClick={() => setName("Sithu")}> Update Name </button>
    <button onClick={() => setAge(35)}> Update Age </button>
    <button onClick={() => setObject({gender: "male"})}> Update Object </button>

    </div>
  )
}

export default MainState;