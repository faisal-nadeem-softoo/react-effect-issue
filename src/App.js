import React, {useState} from 'react'

export function App() {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <>
      <span> Count: {count} </span>
      <button onClick={onClick}>Increment</button>
    </>
  )
}
