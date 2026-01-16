import {useState} from 'react'

const EvenOddChecker = () => {
    const [n, setN]= useState(1);
  return (
   <>
   <label>{n}</label>
   <h3>{n % 2 === 0 ? "Четное" : "нечетное"}</h3>
   <button onClick={() => setN(n+1)}>Next</button>
   </>
  )
}

export default EvenOddChecker
