import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "../../pages/about"
import Posts from "../../pages/posts"
import Error from "../../pages/error"

function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter
