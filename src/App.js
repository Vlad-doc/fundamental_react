import React, { useState } from "react"
import ClassCounter from "./components/class-counter"
import { Counter } from "./components/counter"
import PostItem from "./components/post-item"
import PostList from "./components/post-list"
import MyButton from "./components/UI/button/my-button"
import MyInput from "./components/UI/input/my-input"
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ])

  return (
    <div className="app">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Посты про JS"} />
    </div>
  )
}

export default App
