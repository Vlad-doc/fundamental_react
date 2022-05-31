import axios from "axios"
import React, { useEffect, useState } from "react"
import PostFilter from "./components/post-filter"
import PostForm from "./components/post-form"
import PostList from "./components/post-list"
import MyButton from "./components/UI/button/my-button"
import MyModal from "./components/UI/modal/my-modal"
import { usePosts } from "./hooks/usePosts"
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", querry: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.querry)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      )
      setPosts(response.data)
    }
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="app">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title={"Посты про JS"}
        remove={removePost}
      />
    </div>
  )
}

export default App
