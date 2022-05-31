import React, { useEffect, useState } from "react"
import PostService from "../API/post-service"
import PostFilter from "../components/post-filter"
import PostForm from "../components/post-form"
import PostList from "../components/post-list"
import MyButton from "../components/UI/button/my-button"
import Loader from "../components/UI/loader/loader"
import MyModal from "../components/UI/modal/my-modal"
import Pagination from "../components/UI/pagination/pagination"
import { useFetching } from "../hooks/useFetching"
import { usePosts } from "../hooks/usePosts"
import "../styles/app.css"
import { getPageCount } from "../utils/pages"

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", querry: "" })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.querry)

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  )
}

export default Posts
