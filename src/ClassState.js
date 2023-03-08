import React, { Component } from 'react';

export class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            name: "febevy",
            age: 23,
            tech: {
                skill: "HTML",
            },
            arr: [1,2,3],
        };
    }

   handleUpdate = (index) =>{
    console.log("index", index);
      // index 0  => [2,2,3]
      // index 1  => [1,4,3]
      // index 2  => [1,2,6]
          /////update array values
      const result= this.state.arr.map((item,i) =>
         index == i ? item*2 : item
      ); 
      console.log("result", result);
      this.setState({arr: result});

   }


  render() {
       console.log(this);
    return (

      <div>ClassState {this.state.name} {this.state.age}  {this.state.tech.skill}
                
      {this.state.arr.map((item,index) => (
          <div key={index}>
            <h1> {item} </h1>
            <button onClick={() => this.handleUpdate(index)}> Update </button>
          </div>    
      ))};
      
      <button onClick={() => this.setState({name: "greens"})}> Update Name </button>
      <button onClick={() => this.setState({age: 30})}> Update Age </button>
      </div>
    )
  }
}

export default ClassState;