import About from "../pages/about"
import PostIdPage from "../pages/post-id-page"
import Posts from "../pages/posts"
import Error from "../pages/error"
import Login from "../pages/login"

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "*", element: <Error /> },
]

export const publicRoutes = [
  { path: "/", element: <About /> },
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Login /> },
  { path: "*", element: <Error /> },
]
