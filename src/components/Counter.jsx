import React,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(1);

  return (
    <div>
      <div>   
        <p> Счетчик:{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button> 
      <button  onClick={() => setCount(count +1)}>+ </button>
    
    </div> 
    </div>
  )
}

export default Counter
