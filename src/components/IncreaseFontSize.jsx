import{useState} from 'react'

const IncreaseFontSize = () => {
    const [size, setSize] = useState(20 );
  return (
    <div>
      <p style={{ fontSize: size}}> text</p>
      <button onClick={() => setSize(size + 2)}>+</button>
    </div>
  )
}

export default IncreaseFontSize
