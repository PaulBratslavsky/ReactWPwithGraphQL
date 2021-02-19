import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const link = new HttpLink({ uri: "https://enigmahippo.site/graphql"})
const cache = new InMemoryCache()
const credentials = "same-origin"

export const client = new ApolloClient({ cache, link, credentials })

