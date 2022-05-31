import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Posts from "./pages/posts"
import "./styles/app.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
