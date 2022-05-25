import React, { useState } from "react"

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState("text input")
  const increment = () => {
    setLikes(likes + 1)
  }
  const decrement = () => {
    setLikes(likes - 1)
  }
  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
