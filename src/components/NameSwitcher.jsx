import {useState} from 'react'

const NameSwitcher = () => {
    const names = ["Alex", "   Stive", "Tom", "Joni"];
    const [index,setIndex]= useState(0);

    const nextName = () => {
        setIndex(( index + 1) % names.length);
    }
  return (
    <div>
      <p>{names[index]}</p>
      <button onClick={nextName}> Next name</button>
    </div>
  )
}

export default NameSwitcher
