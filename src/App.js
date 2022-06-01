import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/app-router"
import Navbar from "./components/UI/navbar/navbar"
import { AuthContext } from "./context"
import "./styles/app.css"

function App() {
  const [isAuth, setisAuth] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
