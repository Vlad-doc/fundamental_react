import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/app-router"
import Navbar from "./components/UI/navbar/navbar"
import "./styles/app.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
