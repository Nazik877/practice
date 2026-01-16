import {useState} from 'react'

const BooleanToggle = () => {
    const [active,setActive]= useState(false);
  return (
    <>
    <p> {String(active)}</p>
    <button onClick= {() => setActive(!active)}>Toggle</button>
    
    </>
  )
}

export default BooleanToggle
