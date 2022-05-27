import React, { useMemo, useState } from "react"
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

  const [selectedSort, setSelectedSort] = useState("")
  const [searchQuerry, setSearchQuerry] = useState("")

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      )
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchQuerry),
    )
  }, [searchQuerry, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        placeholder="Поиск..."
        value={searchQuerry}
        onChange={(event) => setSearchQuerry(event.target.value)}
      />
      <MySelect
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
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
