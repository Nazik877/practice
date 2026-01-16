import {useState} from 'react'


const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);
  return (
  <>
  <p>Clicks :{clicks}</p>
  <button onClick={() => setClicks(clicks +1)}>Click me</button>
  </>
  
  )
}

export default ClickCounter
