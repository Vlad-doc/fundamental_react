import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "../pages/about"
import Posts from "../pages/posts"
import Error from "../pages/error"
import PostIdPage from "../pages/post-id-page"

function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="*" element={<Error />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
    </Routes>
  )
}

export default AppRouter
