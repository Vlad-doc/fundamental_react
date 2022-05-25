import React, { useState } from "react"
import ClassCounter from "./components/class-counter"
import { Counter } from "./components/counter"

function App() {
  const [value, setValue] = useState("text input")

  return (
    <div>
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
