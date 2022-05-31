import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/UI/navbar/navbar"
import About from "./pages/about"
import Error from "./pages/error"
import Posts from "./pages/posts"
import "./styles/app.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
