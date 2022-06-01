import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostService from "../API/post-service"
import Loader from "../components/UI/loader/loader"
import { useFetching } from "../hooks/useFetching"

function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
  })
  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: "15px" }}>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
