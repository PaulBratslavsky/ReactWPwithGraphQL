import { gql } from '@apollo/client'

export const HOME_PAGE = gql`
  query homePage {
    page(id: "cG9zdDoxMg==") {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }

`