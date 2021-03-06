import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/app-router"
import Navbar from "./components/UI/navbar/navbar"
import { AuthContext } from "./context"
import "./styles/app.css"

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
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
