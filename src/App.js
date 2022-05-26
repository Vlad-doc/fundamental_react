import React, { useState } from "react"
import ClassCounter from "./components/class-counter"
import { Counter } from "./components/counter"
import PostItem from "./components/post-item"
import "./styles/app.css"

function App() {
  const [value, setValue] = useState("text input")

  return (
    <div className="app">
      <PostItem />
    </div>
  )
}

export default App
