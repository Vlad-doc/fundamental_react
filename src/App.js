import React, { useEffect, useState } from "react"
import PostService from "./API/post-service"
import PostFilter from "./components/post-filter"
import PostForm from "./components/post-form"
import PostList from "./components/post-list"
import MyButton from "./components/UI/button/my-button"
import Loader from "./components/UI/loader/loader"
import MyModal from "./components/UI/modal/my-modal"
import { usePosts } from "./hooks/usePosts"
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", querry: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.querry)
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsPostLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostLoading(false)
    }, 1000)
  }

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
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"Посты про JS"}
          remove={removePost}
        />
      )}
    </div>
  )
}

export default App
