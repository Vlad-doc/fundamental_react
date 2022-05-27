import React, { useMemo, useState } from "react"
import PostFilter from "./components/post-filter"
import PostForm from "./components/post-form"
import PostList from "./components/post-list"
import MyInput from "./components/UI/input/my-input"
import MySelect from "./components/UI/select/my-select"
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ])

  const [filter, setFilter] = useState({ sort: "", querry: "" })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.querry),
    )
  }, [filter.querry, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"Посты про JS"}
          remove={removePost}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  )
}

export default App
