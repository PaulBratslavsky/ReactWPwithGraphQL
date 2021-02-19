import React from 'react'
import parse from 'html-react-parser';

import { useQuery } from '@apollo/client'
import { HOME_PAGE } from '../apollo/queries/homePage.query'

export default function HomePage() {
  const { loading, data, error } = useQuery(HOME_PAGE)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h2>Error: {error.message}</h2>

  const { title, content, featuredImage } = data.page;

  return (
    <div className="page">
      {featuredImage && <header className="page-header"><img src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText}/></header>}
      <h1>{title}</h1>
      {parse(content)}
    </div>
  )
}
