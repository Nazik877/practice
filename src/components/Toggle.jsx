import React,{useState} from 'react'

const Toggle = () => {
    const [show,setShow]= useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'скрыть': ' Показать'}
      </button>
      {show && <p> Привет Реакт!</p>}
    </div>
  )
}

export default Toggle
