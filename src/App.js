import React, { useState } from "react"
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
  const [post, setPost] = useState({
    id: new Date(),
    title: "",
    body: "",
  })

  const addNewPost = (event) => {
    event.preventDefault()
    setPosts()
  }

  return (
    <div className="app">
      <form>
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Посты про JS"} />
    </div>
  )
}

export default App
