import React from 'react'
import parse from 'html-react-parser';

import { useQuery } from '@apollo/client'
import { POSTS } from '../apollo/queries/posts.query'

export default function Posts() {
  const { loading, data, error } = useQuery(POSTS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h2>Error: {error.message}</h2>

  const posts = data.posts.nodes;

  console.log(posts, "From Graph QL")

  function simpleStripHTML(htmlString) {
    return htmlString.replace(/<[^>]*>?/gm, '')
  }

  return (
    <div>
      All Post
      { posts.map(post => <div className="post-card" key={post.id}>
        <h2>{post.title}</h2>
        { parse(post.content) }
        <hr />
      </div>) }
    </div>
  )
}
