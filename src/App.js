import React, { useState } from "react"
import PostForm from "./components/post-form"
import PostList from "./components/post-list"
import MySelect from "./components/UI/select/my-select"
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ])

  const [selectedSort, setSelectedSort] = useState("")

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      {posts.length ? (
        <PostList posts={posts} title={"Посты про JS"} remove={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App
