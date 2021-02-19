import { gql } from '@apollo/client'

export const POSTS = gql`
  query posts {
    posts {
      nodes {
        id
        title
        content
        isSticky
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
}

` 