import React from "react"
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../router"

function AppRouter() {
  const isAuth = true
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.element} path={route.path} element={route.element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.element} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRouter
