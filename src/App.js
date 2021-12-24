import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount]=useState(1);

  const Calculate=(val)=>{
    if(count<=0){
      count=0;
    }
    setCount(count+val)
  }

  const Mul=(val)=>{
    setCount(count*val)
  }
  
  if(count>=20){
    return <h1>It reaches maxium limit</h1>
  }
  


  return (
    <div className="App">
       <h1 className="red">Number <span className="green">Counter</span> </h1>
       <hr></hr>
       <br></br>
       <h1> {count}</h1>
       <button onClick={()=>Calculate(1)}>Add</button>
       <button onClick={()=>Calculate(-1)}>Substract</button>
       <button onClick={()=>Mul(2)}>Double Value</button>
       <h4>{count%2==0?"Even Number":"Odd Number"}</h4>
    </div>
  );
}

export default App;
