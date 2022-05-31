import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}

export const usePosts = (post, sort, querry) => {
  const sortedPosts = useSortedPosts(post, sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(querry),
    )
  }, [querry, sortedPosts])
  return sortedAndSearchedPosts
}